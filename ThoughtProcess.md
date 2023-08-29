# ROUGH PLAN
## Approach for the front end
    - compiler?: react
    - use material ui for styled components
    - use containers, grids to make page responsive
    - use react query to get data from api
    - look for sort/filter components in material ui docs
    - look for sliders and carousel in material ui docs
    - use axios to get data from api
## Approach for back end
    - set up nodejs backend server for api
    - make a route for fetching brands
    - be able to pass query params that will help sort
        - alphabetically
        - published [date]
        - etc..
    - use postgresql for db 
        - schema name: brands ?? trusted_brands
    - use an orm (prisma || sequelize)
        - sequelize (simple/good support/custom queries) [winner]
## Technical Approach
    FrontEnd: React 
        -   material ui (for styled componets)
        -   axios for to fetch data from api
    BackEnd: Nodejs
        - sequelize (orm)
        - postgresql (database)

# REVISED PLAN
## Approach for the frontend
    - Framework: React
    - Styling: Material UI Styled components [no]
    - Styling: Use CSS and media queries (responsiveness) [yes]
    - Responsiveness: Grid System
    - Data Fetching: React Query + axios
## Approach for the backend
    - Server: Nodejs
    - Brand retrieval: Accept dynamic query params for filtering/sorting
    - Database: Postgresql
    - ORM: Sequelize