import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-dialog',
    template: `
    <div *ngIf="isOpen" class="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm select-none">
        <div *ngIf="isOpen" class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-xl">
            <h3 class="text-lg font-medium">Dialog Title</h3>
            <p class="my-4 text-gray-600">
            <ng-content></ng-content>
            </p>
            <div class="flex justify-end">
            <button (click)="close()" class="bg-gray-300 px-4 py-2 rounded-lg text-gray-700">Cancel</button>
            <button (click)="onSave()" class="bg-indigo-500 px-4 py-2 rounded-lg text-white ml-4">Save</button>
            </div>
        </div>
        </div>
    </div>
  `
})
export class DialogComponent {
    isOpen: boolean;
    @Output() save = new EventEmitter<any>();

    constructor() {
        this.isOpen = false;
    }

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }

    onSave() {
        this.save.emit();
        this.close();
    }
}
