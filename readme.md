![Rick and Morty Img](/assets/img/Rick-And-Morty-Logo.png "Rick and Morty Logo") 

# Rick and Morty Api

Master in Software Development Project by Assembler in order to practice Typescript and API REST  
Due 11 August 2023

-- The objective of this project is to make a wiki page of the TV Show "Rick and Morty" via API ([RickandMortyAPI](https://rickandmortyapi.com/)) where you can access the list of all the episode and, by clicking in each one, the web will display the list of the characters that had appeared in this episode. In addition you can see some info about that character like type, gender, status, location... Furthermore, by clicking in the character additional info will be displayed in a modal, including all the episodes in which this character appears. 
Lastly, you can click on the location that appears in the modal to see the habitants of that location. --

## Structure of the Project

**1.1 Episodes Sidebar**
* Name
* Episode code

**1.2. Characters**
* Name
* Status
* Species
* Gender 
* Image
* Episodes in which appears

**1.3. Locations**
* Name
* Type
* Dimension
* Characters who lives there

## Daily Log
- **Day 1**
  * The first day I focused on the HTML and CSS (Bootstrap) in order to see the big picture of the project as it will be easy to make the diferent elements and classes within the script
- **Day 2**
  - On this day I implemmented the functionality of the side list in which appears the first twenty episodes of the TV show and the button (Show All) that will deploy the rest of them
- **Day 3**
  - Added the functionality that will show all the characters that appears in each episode in the main container. On this day I encounter a bug that makes the content of the main page to duplicate and show on the top of the other whenever you click on another episode. 
  I started to include the modal feature
- **Day 4**
  - I focused on the modal on this day and how to make it appear using Bootstrap. Also fetching the info into the modal was a little bit challenging for me as the links between the info started to be more complex
- **Day 5** 
  - Cleaning the code, deleting comments and getting the visual part of the project lean and nice


### Installing

No aditional installation is needed for this project.


### Personal Challenges

I encounter more challenging than expected working with API and most of all using several fetchs and linking the information between them. 
Also as my first project with Typescript it wasn't easy at first to get used to the necessities of this language.
  You know, like getting from this:
```
function getTitles() {
    fetch("http://localhost:3000/posts?_limit=10")
        .then(res => res.json())
        .then(data => {
            return data
            )};
    }
```
To this:
```
export async function getEpisodes(page: number): Promise<Episodes[]> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
        const data = await response.json()
        return data.results
    } catch (error) {
        throw new Error("Something went wrong");
    };
}
```

I also have to say that the more I used TS the more I liked it as it makes the code easier to read and catches the bugs more efficiently than JS.


## Built With

* [Bootstrap](https://getbootstrap.com/)
* [TypeScript](https://www.typescriptlang.org/)
* HTML
* CSS
  
## Acknowledgments

* Hamilton Squad (Ferrán, Antonyo, Iván)
* Assembler Institute of Technology Staff (Manu)
* Authors of the Rick and Morty API :D

## Authors

* **Miguel Mayans** - [GitHub](https://github.com/MiguelMayans)

