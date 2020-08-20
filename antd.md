## flex属性

.item {
	flex: 1 0 auto;
}
<=>
.item {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
}

.item {
	flex: none;
}
<=>
.item {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
}

.item {
	flex: auto;
}
<=>
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}

.item {
	flex: 3;
}
<=>
.item {
    flex-grow: 3;
    flex-shrink: 1;
    flex-basis: 0%;
}

.item-1 {
	flex: 0%;
}
<=>
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}

.item-2 {flex: 24px;}
<=>
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 24px;
}