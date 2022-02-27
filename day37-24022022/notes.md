# vue.js

v-bind
v-model models something to value in data like input value to msg
no need for this in template
out side template need to use this
v-if like if
v-else like else

destructuring in vue?

**$event** to send thr event from template to methods
event.target is replace for this in the dom

computed takes existing data and modify it
v-model.number will change type to number

## components

app.componenet( 'component name', import name)

props [parameters]
v-bind:movie="currMovie"

costume event
$emit('event-name', this.val)
v-on:event-name="do somthing"

## life cicle hooks

created() on create
unmounted() on destroy
