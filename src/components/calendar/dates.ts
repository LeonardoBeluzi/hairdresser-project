import { monthName, numberOfDaysInMonth, dayOfWeek, Month } from "typescript-calendar-date";
import type { CalendarMonth, CalendarYear } from "typescript-calendar-date";

type Month = "jan" | "feb" | "mar" | "apr" | "may" | "jun" | "jul" | "aug" | "sep" | "oct" | "nov" | "dec";

type MonthInfo = {
    day: string;
    date: number;
    month: Month;
    year: number;
};

type WeekFirstDay = "domingo";

const totalDaysInMonthGrid = 42;

const monthsYear = {
    "short": ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    "long": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
};

const weekDays = {
    "firstDay": {
        "0": "Domingo",
    },
    "domingo": {
        "short": ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
        "long": ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    }
};

const fullMonth = (month: number, year: number, firstDayOfTheWeek: WeekFirstDay): MonthInfo[] => {
    const fullArray = new Array();

    const nameOfMonth = monthName(month);
    const viewYear: CalendarYear = {
        year: year,
    };
    const viewMonth: CalendarMonth = {
        ...viewYear,
        month: nameOfMonth,
    };
    

    const firstWeekDayInMonth = dayOfWeek({ ...viewMonth, day: 1 });
    const countDaysInViewMonth = numberOfDaysInMonth(viewMonth);
    const countDaysInPrevMonth = numberOfDaysInMonth({ year: month === 1 ? year - 1 : year, month: monthName(month - 1) });
    const daysOfPrevMonth = weekDays[firstDayOfTheWeek].short.indexOf(firstWeekDayInMonth);
    const daysOfNextMonth = totalDaysInMonthGrid - (daysOfPrevMonth + countDaysInViewMonth);

    let dPrev = daysOfPrevMonth;

    let dNext = daysOfNextMonth < 8 ? 7 - daysOfNextMonth : 14 - daysOfNextMonth;

    for (let i = 0; i < daysOfPrevMonth; i += 1) {
        const date = countDaysInPrevMonth + (i + 1) - daysOfPrevMonth;
        const day = weekDays[firstDayOfTheWeek].short[i];
        const mnth = monthName(month - 1);
        const yr = month === 1 ? year - 1 : year;

        fullArray.push({
            day: day,
            date: date,
            month: mnth,
            year: yr,
        });
    }

    for (let i = 0; i < countDaysInViewMonth; i += 1) {
        const date = i + 1;
        const day = weekDays[firstDayOfTheWeek].short[dPrev]
        const mnth = monthName(month);
        const yr = year;

        dPrev = dPrev > 5 ? 0 : dPrev + 1;

        fullArray.push({
            day: day,
            date: date,
            month: mnth,
            year: yr,
        });
    }

    for (let i = 0; i < daysOfNextMonth; i += 1) {
        const date = i + 1;
        const day = weekDays[firstDayOfTheWeek].short[dNext];
        const mnth = monthName(month + 1)
        const yr = month === 12 ? year + 1 : year;
        
        dNext = dNext > 5 ? 0 : dNext + 1;

        fullArray.push({
            day: day,
            date: date,
            month: mnth,
            year: yr,
        });
        
    }

    return fullArray;
};

export { fullMonth, weekDays, monthsYear, type WeekFirstDay, type Month };