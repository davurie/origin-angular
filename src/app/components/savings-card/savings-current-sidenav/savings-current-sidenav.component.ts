import { Component, Input } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { Subject, iif } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

import { Account } from 'src/app/interfaces/user';
import { AccountService } from 'src/app/services/account.service';
import { SidenavService } from 'src/app/services/sidenav.service';
import { UserState } from 'src/app/states/user.state';

@Component({
  selector: 'app-savings-current-sidenav',
  templateUrl: './savings-current-sidenav.component.html',
})
export class SavingsCurrentSidenavComponent {

  @Input() accounts!: Account[];
  @Input() currentObjectiveValue!: number;

  faInfoCircle = faInfoCircle;

  fakeBankBalance = new Subject<void>();
  loadingBalance!: boolean;

  newAccountModel: Account = { lastDigits: '', type: '', balance: 0, userId: 1 };
  showAddAccountForm: boolean = false;
  accountTypes: string[];

  constructor(
    private sidenavService: SidenavService,
    private accountService: AccountService,
    private userState: UserState) {

    this.accountTypes = ['Checking', 'Savings', 'Origin Account', 'IRA', '401k'];

    this.fakeBankBalance.pipe( // Spicy code, but it's just a fake service
      tap(() => {
        this.newAccountModel.lastDigits.length === 4
          ? (this.loadingBalance = true)
          : this.newAccountModel.balance = 0
      }),
      debounceTime(2000),
      tap(() => this.newAccountModel.lastDigits.length === 4
        && (this.newAccountModel.balance = (Number(this.newAccountModel.lastDigits) * 64.27))))
      .subscribe(() => {
        this.loadingBalance = false;
      });
  }

  closeSidenav = () => this.sidenavService.close();

  toggleAddAccountForm = () =>
    this.showAddAccountForm = !this.showAddAccountForm;

  handleSaveNewAccount = () =>
    this.accountService.addAcount(this.newAccountModel)
      .pipe(debounceTime(2000))
      .subscribe({
        complete: () => {
          this.userState.getPosts();
          this.toggleAddAccountForm();
          this.newAccountModel = { lastDigits: '', type: '', balance: 0, userId: 1 };
        }
      });

}
