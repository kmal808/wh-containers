# WinHi 🪟 Container 🚢 Offload 📦 Inventory 📝
A webapp for managing the inventory of containers offloaded @ [Windows Hawaii](https://windows-hawaii.com)

*Deployed 🚀 @*
[containers.dowshawaii.win](https://containers.dowshawaii.win/)


## Overview 👀
Previously, new product (*windows, doors, & siding*) was inventoried by hand (*yes, with paper and pencil lol*) onto a printed Excell spreadsheet. Eventually each list would wind up in a pile or in a binder with other lists. That would then be used to schedule the installation of the product and keep track of what jobs we had at any given time in our warehouse. If we needed to look back to a prior container, that would be done by digging through the pile of paper. Not ideal or efficient. This archaic method led to a lot of product going untracked and unaccounted for.

## Objectives 🎯
Utilize modern web technologies to create a more efficient and accurate way of tracking the inventory of containers offloaded. This will (*hopefully*) limit the number of jobs/product that "slip through the cracks" . 

## Features 📋
* A form with inputs for the following:
  * Container Number
  * Matson Booking Number
  * Date
  * Job Number
  * Job Name
  * Quantity
  * Manufacturer Name
  * Manufacturers Order Number
  * Description
  * Additional Details/Notes
* The form data is entered into a html `<table>` element
* Once the table is completed the table can printed as a PDF 


## Tasks 📝
- [X] Create a webapp that allows for the inventory of containers to be done digitally
- [ ] Export table as a CSV file
- [ ] Export table to a PDF file
- [ ] Store each table in a database 
   - MySql or MongoDB?? *Or some bleeding edge "edge-db"*
- [ ] UI to preform CRUD operations on the data  
- [ ] Option to imported into MS Teams