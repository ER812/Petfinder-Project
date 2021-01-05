# Petfinder Project

General Assembly APIs Project 1

# Project Overview

Uses the Petfinder.com API to make a webpage, featuring adoptable pets, searchable by breed.

## Project Name

Petfinder Project

## Project Description

Using the Petfinder API, takes searches of animal breeds and returns available adoptable pets.

## API and Data Sample

API: https://www.petfinder.com/animals

```
{
    "animal": {
        "id": 50103020,
        "organization_id": "NC518",
        "url": "https://www.petfinder.com/cat/ghost-nc-50103020/nc/liberty/tailless-cat-rescue-nc518/?referrer_id=f6c7fcd0-5d3b-4e0c-905f-1479d32dafbe",
        "type": "Cat",
        "species": "Cat",
        "breeds": {
            "primary": "Domestic Short Hair",
            "secondary": null,
            "mixed": false,
            "unknown": false
        },
        "colors": {
            "primary": "White",
            "secondary": null,
            "tertiary": null
        },
        "age": "Adult",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {

}
```

## Wireframes

https://imgur.com/a/20Xs6pF - Site is single page. Mobile first. Scales to desktop easily but, background changes from black to gray after height/width threshold reached.

#### MVP

- Find and use external api.
- Render random image on landing.
- Allow user to choose breeds from dropdown menu.

#### PostMVP

- Add second search function to match user and pet by location.
- Add personalized adoption message with specific pet names e.g. "Cody is available for adoption today!"

## Project Schedule

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day    | Deliverable                                        | Status     |
| ------ | -------------------------------------------------- | ---------- |
| Dec 17 | Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete |
| Dec 21 | Project Approval                                   | Incomplete |
| Dec 22 | Core Application Structure (HTML, CSS, etc.)       | Incomplete |
| Dec 23 | Pseudocode / actual code                           | Incomplete |
| Dec 23 | MVP                                                | Incomplete |
| Jan 21 | Presentations                                      | Incomplete |

## Priority Matrix

https://imgur.com/a/em57BDI

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --------- | :------: | :------------: | :-----------: | :---------: |
| HTML      |    H     |     12 hrs     |     8 hrs     |    -4 hr    |
| CSS       |    H     |     12 hrs     |     3 hrs     |   -9 hrs    |
| API 1     |    H     |      1 hr      |     2 hr      |    +1 hr    |
| API 2     |    L     |     4 hrs      |     3 hrs     |    -1 hr    |
| JS        |    H     |     10 hrs     |    20 hrs     |   +10 hrs   |
| Total     |          |     39 hrs     |    35 hrs     |   -4 hrs    |

## Code Snippet

f (
data[i].name !== "Scales, Fins & Other" &&
data[i].name !== "Small & Furry"
) {
option.value = data[i].name;
option.innerText = data[i].name;
selectMenu.appendChild(option);
}
}
This is a common developer fix to hide dead paths. I chose it because I struggled understanding a lot of the necessary code in this project but, this was clear and I understood it well.

```

## Change Log

- Site now offers a list of adoptable animals rather than just one random animal. More closely resembles the pattern of data display on a real adoption website.
- Second API occurs after an onClick and loads a new page instead of being integrated on a single page. Easier for the user and simpler to code.
```
