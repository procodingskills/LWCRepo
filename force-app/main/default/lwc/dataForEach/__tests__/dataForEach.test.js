import {createElement} from 'lwc';
import DataForEach from 'c/dataForEach';

// dataForEach 
describe('c-data-for-each',() => {
    afterEach(() => {
        while(document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
    });
    // Promise reolver
    async function promiseHandler(){
        return Promise.resolve();
    }

    it('Verify the display Accounts', () =>{
        const EXPECTED = ['Amit, Lead',
            'Anoop, T.Lead',
            'Annu, L.Consultant'];
    // create your component /element 
    const element = createElement('c-data-for-each',{
        is : DataForEach
    });
    document.body.appendChild(element);

    // Get all the rendered data from the Component / element
    console.log('LI CONTAINS : '+JSON.stringify(element.shadowRoot.querySelector('li')));
    // {"outerHTML":"<li>Amit, Lead</li>","nodeValue":null,"textContent":"Amit, Lead","innerHTML":"Amit, Lead"}
    const accounts = Array.from(
        element.shadowRoot.querySelectorAll('li')).map((li)=>li.textContent);
    expect(accounts).toEqual(EXPECTED);
    }); 

    // Test for avilablity 
    it('is accessible on intialization', async() => {
         // create your component /element 
        const element = createElement('c-data-for-each',{
            is : DataForEach
        });
        document.body.appendChild(element);
        await expect(element).toBeAccessible;
    });
});