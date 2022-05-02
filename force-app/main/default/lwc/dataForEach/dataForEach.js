import { LightningElement } from 'lwc';

export default class DataForEach extends LightningElement {
    accounts = [
        {
            Id : '001521762761672',
            Name : 'Amit',
            Title : 'Lead'
        }, {
            Id : '001521762761673',
            Name : 'Anoop',
            Title : 'T.Lead'
        },
        {
            Id : '001521762761674',
            Name : 'Annu',
            Title : 'L.Consultant'
        }
    ]
}