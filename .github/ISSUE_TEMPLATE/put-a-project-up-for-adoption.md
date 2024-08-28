---
name: Put a project up for adoption
about: Found a project that needs some love? Can't maintain your own project anymore?
title: "<project name>"
labels: New Project
assignees: edmundmiller
# projects: ["octo-org/1", "octo-org/44"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this form!
  - type: input
    id: project-name
    attributes:
      label: Project Name
      placeholder: ex. dragmap
    validations:
      required: true

  - type: input
    id: repo
    attributes:
      label: Repo
      placeholder: ex. https://github.com/Illumina/DRAGMAP
    validations:
      required: true
  - type: markdown
    attributes:
      value: |
        Rather make the PR yourself?
---
