const validator = new JustValidate('#emailForm');

validator
.addField('#nameInput', [
    {
        rule: 'required',
    }
])

.addField('#emailInput', [
    {
        rule: 'required',
    },
    {
        rule: 'minLength',
        value: 10,
    },
    {
        rule: 'maxLength',
        value: 30,
    }
])

.addField('#textArea', [
    {
        rule: 'required',
    },
    {
        rule: 'maxLength',
        value: 500,
    }
])