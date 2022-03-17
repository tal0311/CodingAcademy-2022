## scss

### variables

$main: #454257

### &

&placeholder for root element

-- code--  
h1{

&.green

}

in css  
h1.green{

}

**when .card is in home page**  
.card{

    body.homepage &{
    color: $3333

}

&-small {  
 font-size:1em  
}  
}


## color functions
link: https://www.w3schools.com/sass/sass_functions_color.php  

**functions and variables are the value side of property**

## Mixins
reusable css chunk  
@mixin btn()


button{
    @include btn()
}
