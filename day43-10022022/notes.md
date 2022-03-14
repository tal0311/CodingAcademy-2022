# vue state management

state is app state at any givven time
mutatalble state
flux - action=> dispatcher=> store=> view

## vuex
store - holds the state
commit - will make component use the state
mutation will user the state at the componnent
if a state is mutable we will put it in store
strict store

### store
this.$store.count
take state from store with computed

### nutation 
are key in the store for anythisng u like to change in the store stste
to acsess mutaion use comit in the comp
in the methods this.commit({type: 'changeCount', val: 0})
in commit can send paramenters
use distructoring to make it clearer 

## getters
will accept state as parameter 
and will display it in computed of comp

## actions
components usually dont do commit thay call actions that call mutations

## FE service
fe srvice fun will call diredctly to the storage service.

## finally 
happens in cath and in then