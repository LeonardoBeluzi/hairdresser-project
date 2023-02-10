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