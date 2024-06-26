import React from 'react'
import css from './statistics.module.css'
import { BsArrowUpShort } from "react-icons/bs";
import { groupNumber } from "../../Data/Data";
import StatisticalChart from "../../Components/StatisticalChart/StatisticalChart";

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <span className={css.title}>Overview  statistics </span>

        <div className={`${css.cards} grey-container`}>
            <div>
                <div className={css.arrowIcon}>
                    <BsArrowUpShort />
                </div>
                <div className={css.card}>
                    <span>Top item this month</span>
                    <span>Office comps</span>
                </div>
            </div>

            <div className={css.card}>
                <span>Items</span>
                <span> ${groupNumber(74.00003)}</span>
            </div>

            <div className={css.card}>
                <span>
                    Profit
                </span>
                <span>
                    profit
                </span>
                <span> ${groupNumber(37000)}</span>
            </div>
            <div className={css.card}>
                <span>
                    Daily Average
                </span>
                <spna> ${groupNumber(57348)}</spna>
            </div>
        </div>

        <StatisticalChart />
    </div>
  )
}

export default Statistics
