# ts-lib-starter

![Download](https://img.shields.io/npm/dw/@citrus327/array-partition)
![Version](https://img.shields.io/npm/v/@citrus327/array-partition)


## Basic Usage

1. Add changesets
    
    ```bash
    npm install @changesets/cli && npx changeset init
    ```
    
2. Create a changeset
    
    ```bash
    npx changeset
    ```
    
3. Apply changeset version
    
    ```bash
    npx changeset version
    ```

## Github action integration

1. Modify workflow permissions

![image](https://github.com/citrus327/ts-lib-starter/assets/17166940/48586e14-57a7-4d75-b7da-753ac652a520)

2. set up NPM_TOKEN
3. push code with changeset markdown file.
4. merge PR and let github action do the work
