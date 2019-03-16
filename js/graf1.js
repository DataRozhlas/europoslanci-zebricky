
Highcharts.chart('graf1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Češi na pátém místě'
    },
    subtitle: {
        text: 'Účast europoslanců při (jmenovitých) hlasováních v Evropském parlamentu 2014–2019'
    },
    xAxis: {
        categories: ["Rakousko","Malta","Slovensko","Portugalsko","Česko","Polsko","Slovinsko","Nizozemsko","Chorvatsko","Lucembursko","Katalánsko","Francie","Německo","Bulharsko","Finsko","Dánsko","Španělsko","Litva","Rumunsko","Belgie","Itálie","Lotyšsko","Řecko","Maďarsko","Estonsko","Irsko","Švédsko","Spojené království","Kypr"],
         crosshair: true
    },
    yAxis: {
        min: 50,
        title: {
            text: 'průměrná účast v procentech'
        }
    },
    credits: {
        text: "Zdroj: MEP Ranking",
        href: "http://www.mepranking.eu/8/ep.php?order=RCVOT"
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
        data: [95.09,94.57,91.94,91.82,{y:91.65, color: "#d52834", dataLabels: {enabled: true, format: '{y} %', rotation: 270, inside: true, y: -70}},91.56,91.38,90.92,90.83,90.6,90.05,89.57,88.76,87.52,86.66,86.66,86.4,86.29,85.46,85.14,84.86,84.69,83.7,82.58,81.97,81.71,81.66,81.58,77.68],
        color: "#C0C0C0"

    }]
});

