import { observable } from 'mobx';

class Contacts {
    @observable all = [
        {id: 1, name: 'Person 1', email: 'p1@mail.com'},
        {id: 2, name: 'Person 2', email: 'p2@mail.com'},
    ];
}

const store = new Contacts();

export default store;