# responsive design

em- relative to size of its element or related parent up to root element  
rem - relative to font size of root element  
vw, vh - relative to width and hight of view port  
vmin-vmax - relative to view port  
can be applied to hight and width

### @import

allows you to break your css to many files.  
first import mobile  
@import '[location]' screen and( min-width: 760px)
@ is a CSS rule

### media queries

media type - screen | print | speech | all  
be specific as posable with media type.  
import to media queries.

<!-- code -->

@media screen and(max-width:760px){ //counts from 0 px
body{  
 .....  
 }
}

### mobile first

application don't like to run over lines of code while in mobile.
in main css we will put all default values that other imports will not run over. that will appear at any media query.
@import mobile
@import tablet
@import desktop

## flexBox

flex container parent  
flex item - child  
main axis - flex direction row/column
justify-content - will align to x axis
align-items will align to y axis

flex-wrap: responsiveness without media queries  
gap: margin between flex items.  
flex-flow: short hand of direction and wrap [row-wrap][colomun-wrap]  
flex-basis: [200px] will be the x||y of items by row od columns.  
flex-grow: will allow items to grow to fit the flex container.  
flex-shrink: will allow items to shrink to fit a space they don't have.  
flex: short hand to flex grow and flex basis.  
order: controls order on the flex items. default is 0 use -1 || 1.  
align-self: aligns the flex item.

### resources

https://caniuse.com/
