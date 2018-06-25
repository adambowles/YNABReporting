import * as ynab from 'ynab'

import getNetWorthVelocity from '../lib/getNetWorthVelocity'
import getTransactions from '../lib/getTransactions'
import getBudgetId from '../lib/getBudgetId';

export default async function getNetWorhtOverview(db) {
  const velocity = await getNetWorthVelocity(db)
  const budgetID = await getBudgetId(process.env.budgetName)
  const transactions = await getTransactions(budgetID)

  let netWorth = 0

  transactions.forEach(t => {
    netWorth += ynab.utils.convertMilliUnitsToCurrencyAmount(t.amount, 2)
  })

  return {
    velocity,
    netWorth
  }
}