# React online marathon

## The tasks of the topic "HOCs"

There are components EntitiesList and EntityDetails in the application.
These components have similar logic: they both display some external data that is loaded via a method passed in a props. Also, both components display text "Loading..." while the data is being loaded.

Please, extract all common logic using HOC.
Name it "withLoading" and place into the "components" folder.   
The HOC should contain logic of retrieving data and rendering "Loading..." text while the data is not loaded yet.  
Also, the HOC should pass down prop _**data**_ with with retrieved data to its wrapped component.  
Update EntitiesList and EntityDetails to use the HOC.
