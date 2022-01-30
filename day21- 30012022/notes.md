## css level 2

### text effects

text overflow- what happens to text when is larger then box
text overflow: ellipsis three dots

### transitions

on the class that is set
every change will get a transition time
transition: [property] or all if not specify, [duration], ease| ease-in, [delay]
transition: width, backgraound....
good transition is 0.3s

### css precedence

attribute- 1point  
 class -10points  
 id- 100points  
 inline style-1000points better not use this for style  
 !important- infinite points edge cases

### Deprecated

HTML styling is deprecated

### fonts

link - in html  
import in css  
font family is also a fullback to other fonts

### 2d transform

transform: make changes to element
transform property will take place on other layer, will not push other elements.

### css animations

defines animation
@keyframes [animation-name] {  
 from || [%]{  
[property]
}  
 to{  
[property]
}

}

animation timing function: linear  
animation iteration count: [times]

## layout

header, content nav footer  
in past table was used for layouts- worst for SEO  
now it is used only for emails  
colspan - how many cols to expend
cellspacing is margin inside the html

### layers

to put element over an other

#### position

every position have 4 properties.
top: , left: , right: , up:  
**statice** is default position  
**relative**- relative to its original position. in the html  
**absolute** - will exit the document flow in to its first parent flow that is not static  
**fixed** is defined by the view port

#### z-index

by default z index is 0  
better use 10 points jumps

#### float

float right, lefet

_width and hight do not affect inline element_

#### p layout

column-count, column-gap
column-rule is the border, takes border properties
