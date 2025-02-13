# web-programming-exercises  
This repository contains a collection of all exercises from the web programming class.  

## First Class  
We learned about **Git**, a version control system, and how to use **Git Flow**, a branching model that defines three main branches:  

- `master`  
- `release`  
- `develop`  
- `feature`  

Each branch has a specific role in the development workflow.  

### Master  
This branch is responsible for keeping the project in a stable state.  

### Release  
This branch is used for final revisions before deployment.  

### Develop  
This branch contains all the features currently in development.  

### Feature  
These branches are used to develop specific **User Story (HU)** requirements before merging into `develop`. 

---

# Git simples codes 

```bash
git init
git branch develop
git checkout develop
git merge main
git add .
git commit -m "Initial commit"
git log
git log --oneline
git push origin develop
git help
```

## more info:
- **[Git codes](https://www.atlassian.com/git/glossary#commands)**
- **[Git flow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)**