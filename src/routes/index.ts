import getNetWorthOverview from '../handlers/getNetWorthOverview'
import importTransactions from '../lib/importTransactions'

const initRoutes = (app, db) => {
  app.get('/netWorthOverview', (req, res, next) => {
    const overview = getNetWorthOverview(db)
    res.send(JSON.stringify(overview))
  })

  app.get('/import', (req, res, next) => {
    importTransactions(process.env.budgetName ,db)
    res.status(200).send('sucess')
  })
}

export { initRoutes }