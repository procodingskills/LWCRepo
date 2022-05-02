import { LightningElement } from 'lwc';

export default class DemoBinding extends LightningElement {
    // Properties at class level
    greetingMessage = 'My Demo';

    // change handler function
    changeHandler(event){
        // properties at function level
        this.greetingMessage = event.target.value;
    }
}