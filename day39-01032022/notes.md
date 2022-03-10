## vue

event will pass as default
or $event as second parameter

### tow way data binding

v-model = input select textarea
v-modal.lazy="msg" > will fire when user left input filed

### interpolation

{{js}}

### v-bind

will connect data to properties
:class= 'text-class',
:value=""

### computed

changed on other data
will not change original data

## component

responsible for one job

### props

passing props in ['prop']

### emits

passing event from child to parent
parent will pass props
child will throw events up

**short hand**
: = v-bins
@ = v-on:

### forms

pass inputs as checbox to v modal will have value="jack"

### event handling

self = click on item but not on his children
once = will allow only one click

### app structure

item app
item filter //use copy of filters
item list
item preview
item details
item edit (create and edit)

### $ref

to capture an html element like focus at only mounted

### props

dont change props that recived from parent

### router

$router.push('/car') will move user to different location
router link dont wrap in button

routs
{
path:'/car',
component: callLIst ,
children: [
{
path:'/team',
component: teamComp
}
]
}

### watch

watch functions as they are called (val, oldVal)

## dynamic components

:is="cmpType"


## keep alive
will remember components 