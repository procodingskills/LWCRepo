import {createElement} from 'lwc';
import ApexWireMethodToProperty from 'c/apexWireMethodToProperty';
import getContacts from '@salesforce/apex/ContactController.getContacts';


// Mock the data you created 
const mockGetContacts = require('./data/getContacts.json');
jest.mock(
    '@salesforce/apex/ContactController.getContacts',
    () => {
        const {
            // wire adaptor for testing
            createApexTestWireAdapter
        } = require('@salesforce/sfdx-lwc-jest');
        return {
            default : createApexTestWireAdapter(jest.fn())
        };
    },
    {virtual : true}
);

describe('c-apex-wire-method-to-property',() =>{
    afterEach(() => {
        while(document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
        //check the data removed for moch loads
        jest.clearAllMocks();
    });

    async function promiseHandler(){
        return Promise.resolve();
    }
    describe('get Conatcts using wire property',() => {
        it('Render all 7 records', async () => {
            // Create a Element 
            const elementData = createElement('c-apex-wire-method-to-property',{
                is : ApexWireMethodToProperty
            });
            document.body.appendChild(elementData);
            // get / extract / emit data from @wire
            getContacts.emit(mockGetContacts);
            // await for async action 
            await promiseHandler();
            const details = elementData.shadowRoot.querySelectorAll('p');
            expect(details.length).toBe(mockGetContacts.length);
        });
        it('For Error Check', async () => {
            const elementData = createElement('c-apex-wire-method-to-property',{
                is : ApexWireMethodToProperty
            });
            document.body.appendChild(elementData);
            getContacts.error();
            // await for async action 
            await promiseHandler();
            expect(null).toBeNull();
        });
    });
});

