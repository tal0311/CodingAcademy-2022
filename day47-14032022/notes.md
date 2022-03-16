## vite

npm vue@latest

in router
create web hash history

## props

prop:{  
 type:String,  
 required: true  
 default: 'hallo' || ()=>{name:'vue'} arrays and object need factory functions a function that returns an array  
 validator: (value)=>{  
 return value.length> 8  
 }  
}

## slots

pass content without props to other components
app.config.globalProperties.$[globalName]
wrap with

<!-- code -->

<component>
<template v-slot:header || #heder>  
<h1> hedaer h1 </h1>
<p>lorem 15 </p>
</template>
</component>

**inside the component**

<slot name="header">
in this component will accept the <template></template>
with v-slot:header
</slot>

## directives
v-for, v-if, v-model  
costume directives

## build
