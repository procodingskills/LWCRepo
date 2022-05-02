import {createElement} from 'lwc';
import DemoBinding from 'c/demoBinding';
import UserPreferencesExcludeMailAppAttachments from '@salesforce/schema/User.UserPreferencesExcludeMailAppAttachments';
// Describe about your component 
describe('c-demo-bidning',() =>{
    // every test should start with afterEach
    afterEach(() => {
        // Clean the DOM elements 
        while(document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
        });
    // Promise reolver
    async function promiseHandler(){
        return Promise.resolve();
    }

    // Test Method
    it('Check the Input message is updating', async() =>
    {
        const expectedValue = 'Amit';
        // create a component / elemnet
        const element = createElement('c-demo-Binding',{
            is : DemoBinding
        });
        document.body.appendChild(element);

        // verify on load greeting message
        let textValue = element.shadowRoot.querySelector('p');
        expect(textValue.textContent).toBe(`Hello , ${expectedValue}`);

        // On Change of Greeting message
        const inputEle = element.shadowRoot.querySelector('lightning-input');
        inputEle.value = expectedValue;
        inputEle.dispatchEvent(new CustomEvent('change'));

        // flush your promises 
        await promiseHandler();
        expect(textValue.textContent).toBe(`Hello , ${expectedValue}`);
        console.log('MY final Output : '+textValue.textContent);
    });
});
