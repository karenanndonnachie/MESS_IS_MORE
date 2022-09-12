# MESS IS MORE code, tools & other materials
## What you may find here:
* P5js snippets & examples
* Gcode tools etc
* Drawing machines builds & docs

# Essential Software
To prepare to design and draw with some more advanced drawing machines and robots, download and install the following (open-source and free) software.

## Inkscape

This is an open-source vector illustration program, not unlike Adobe Illustrator. The main difference is that it can be easily modified for specialised use, such as making drawings and type for drawing machines! Please note this is open-source and free software. <br/>
https://inkscape.org/release/inkscape-1.2.1/

## G-code tools

G-code = Geometric code. This is how we get our laptops to "talk" with the drawing machines. Luckily, Inkscape (above) already comes with some neat G-code tools in the extensions menu. Andy will demonstrate how these tools work, and give you a specific walk-through for preparing drawings and type for conversion into G-code!
No link needed (it's already packaged in Inkscape!)

## GSender

This little piece of software helps you send the G-code to the machine. There are many G-code senders out there, but we've found this one works fairly well. It doesn't do much other than connect to a drawing machine (or other CNC device like a 3d printer) and send packets of G-code.<br/>
https://sienci.com/gsender/

## Processing

Link here for your convenience (e.g. if you need to reinstall).
https://processing.org/download
_____________________________________
# If you want to build your own Github (maybe you want a web site of your work?)

## <strong>Github FAQ</strong>

How do I create a GitHub repository?
 1. In the upper-right corner of any Github page, click '+', and then click New repository.
 2. Type a short, memorable name for your repository. ...
 3. Optionally, add a description of your repository. ...
 4. Choose between creating a public or private repository. ...
 5. Select Initialize this repository with a README.
 6. Click Create repository.

How do I add a folder to my github repo?
 1. Select "Create new file"
 2. When prompted to name the file add a directory (with forward slash) before the name... eg. /Week 2/README.md the directory (folder and new "README.md" will get added automatically)
 3. Edit your new "README" 

How do I add an image to my 'README.md' files?
 1. ADD images by uploading the image to the same folder (please keep them light jpg format <200kb).
 2. THEN you show your image on your "README" page by using 
   a. general html markup, eg `<img src="yourImage.jpg" width="350" />`<br/>
 OR<br/>
   b.  use Github's link markdown like this: `![label](path/to/yourimage.jpg)`
_____________________________________
# Git Good with Github (Advanced)
## How do I style my README.MD file?
Any file that ends in '.md' will be interpreted through Github's own flavour of MarkDown (styling). You can see all the possibilities in the [Github "Mastering Markdown" wiki.](https://guides.github.com/features/mastering-markdown/)

## How do I make my repo visible as a website?
You will need to have either readme.md or index.html files in each directory you want to be viewable. You will need to activate Github Pages to set your Repo/Project/Branch as a web directory (got to settings). If no index.html files are found in the folder, the readme.md will be used as a base page and will be styled with Github's own markdown (a type of CSS/styling).

