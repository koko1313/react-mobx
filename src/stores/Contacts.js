import { observable, action } from 'mobx';

class Contacts {
    @observable all = [
        {id: 1, name: 'Person 1', email: 'p1@mail.com'},
        {id: 2, name: 'Person 2', email: 'p2@mail.com'},
    ];

    @action add(person) {
        this.all.push({id: person.id, name: person.name, email: person.email});
    }
}

const store = new Contacts();

export default store;