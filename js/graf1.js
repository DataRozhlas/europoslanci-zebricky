
Highcharts.chart('graf1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Češi na třetím místě'
    },
    subtitle: {
        text: 'Účast europoslanců při (jmenovitých) hlasováních v Evropském parlamentu 2014–2019'
    },
    xAxis: {
        categories: ["Rakousko", "Malta", "Česká republika", "Belgie", "Portugalsko", "Slovensko", "Polsko", "Chorvatsko", "Slovinsko", "Nizozemsko", "Francie", "Španělsko", "Německo", "Lucembursko", "Irsko", "Švédsko", "Estonsko", "Bulharsko", "Itálie", "Dánsko", "Rumunsko", "Finsko", "Litva", "Kypr", "Řecko", "Maďarsko", "Lotyšsko", "Spojené království"],
        crosshair: true
    },
    yAxis: {
        min: 50,
        title: {
            text: 'průměrná účast v procentech'
        }
    },
    credits: {
        text: "Zdroj: votewatch.eu",
        href: "https://www.votewatch.eu/en/term8-member-states-attendance.html#/#0/0/2014-07-01/2019-08-01"
    },
    tooltip: {
        shared: true,
        valueSuffix: " %"
    },
    plotOptions: {
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'průměrná účast',
        data: [95.11, 94.75, {y:92.29, color: "#d52834", dataLabels: {enabled: true, format: '{y} %', rotation: 270, inside: true, y: -75}}, 92.17, 91.73, 91.51, 91.38, 91.37, 91.36, 90.70, 90.16, 89.61, 89.12, 89.08, 88.98, 88.35, 87.98, 87.92, 87.82, 87.26, 86.63, 85.45, 85.33, 84.14, 83.72, 83.13, 82.83, 82.17],
        color: "#C0C0C0"

    }]
});