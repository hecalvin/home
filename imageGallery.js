function showImageWithDescription(image)
{
	var source = image.getAttribute("href");
	var title = image.getAttribute("title");
	
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	
	var placeholderParagraph = document.getElementById("description");
	placeholderParagraph.firstChild.nodeValue = title;
}

function displayChildCount()
{
	var bodyElement = document.getElementsByTagName("body")[0];
	var child = bodyElement.childNodes;
	alert("Number of body children: " + child.length);
}
function displayBodyChildrenTypes()
{
	var bodyElement = document.getElementsByTagName("body")[0];
	var child = bodyElement.childNodes;
	for(var index = 0; index < child.length; index++)
	{
		var nodeType = child[index].nodeType;
		var nodeTypeName = "unknown";
		switch (nodeType)
		{
			case 1:
				nodeTypeName = "element node";
				break;
			case 2:
				nodeTypeName = "attribute node";
				break;
			case 3:
				nodeTypeName = "text node";
				break;
		}
		alert(index + ": " + nodeTypeName);
	}
}

