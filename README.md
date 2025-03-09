# web-programming-exercises  
This repository contains a collection of exercises from the web programming class.

## First Class  
In this session, we learned about **Git**, a version control system, and how to use **Git Flow**, a branching model that defines four main branches:

- `master`  
- `release`  
- `develop`  
- `feature`  

Each branch serves a specific purpose in the development workflow. 

### Master  
This branch keeps the project in a stable state and is used for production releases.

### Release  
This branch is used for final revisions and testing before deployment.deployment.  

### Develop  
This branch contains all the features currently under development.  

### Feature  
These branches are used to develop specific **User Story (HU)** requirements before merging into`develop`. 

---

# Git Basic Commands

```bash
git init                  # Initialize a new repository
git branch develop        # Create a new branch named 'develop'
git checkout develop      # Switch to the 'develop' branch
git merge main            # Merge 'main' into the current branch
git add .                 # Stage all changes
git commit -m "Initial commit"  # Commit with a message
git log                   # View the commit history
git log --oneline         # View a simplified commit history
git push origin develop   # Push 'develop' to the remote repository
git help                  # Show help for Git commands
```

## 📌more info:
- **[Git Commands](https://www.atlassian.com/git/glossary#commands)**
- **[Git Flow Workflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)**

---
# Second class

In this class, we learned about CSS (Cascading Style Sheets) and HTML (HyperText Markup Language), a language used to define the appearance and structure of a webpage.

The teacher assigned the following exercise:

![EXERCISE](/public/exercise-class1.png)

In this exercise, the flexbox layout is used. To understand this technology, it is essential to grasp the concepts of boxes, parent elements, and child elements, and how they interact.

- ## Parent and Child Elements
    - A parent element is any tag that contains other tags.
    - A child element is any tag inside another tag. (A child element can also be a parent if it contains other elements.)

- ## Flexbox Overview
Flexbox allows us to manipulate parent elements so that their child elements are arranged in a defined order. This makes it easier to create flexible and responsive layouts.

## 📌 more info: 
- **[CSS FLEXBOX Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**
- **[CSS GRID Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)**