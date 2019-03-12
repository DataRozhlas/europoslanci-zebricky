title: "Aktivita europoslanců"
perex: ""
published: "8. března 2019"
styles: ["https://cdn.datatables.net/v/dt/jq-3.3.1/dt-1.10.18/r-2.2.2/datatables.min.css"]
libraries: [highcharts, "https://cdn.datatables.net/v/dt/jq-3.3.1/dt-1.10.18/r-2.2.2/datatables.min.js"] #jquery, d3, highcharts, datatables
options: [noheader, nopic] #wide, noheader (, nopic)
---



<wide>
<h2>(Ne)přítomnost na plenárních zasedáních</h2>
<br>
<button id="absence-cesi">Jen Češi</button> <button id="absence-vsichni">Všichni</button>
<br>
<br>
<table id="absence" class="display" style="width:100%">
        <thead>
            <tr>
                <th>pořadí</th>
                <th>jméno</th>
                <th>stát</th>
                <th>účast na zasedání</th>
                <th>podrobnosti</th>
                <th>frakce</th>
                <th>strana</th>
            </tr>
        </thead>
</table>
</wide>
<br>
<br>
<wide>
<h2>(Ne)účast při jmenovitých hlasováních</h2>
<br>
<button id="hlasovani-cesi">Jen Češi</button> <button id="hlasovani-vsichni">Všichni</button>
<br>
<br>
<table id="hlasovani" class="display" style="width:100%">
        <thead>
            <tr>
                <th>pořadí</th>
                <th>jméno</th>
                <th>stát</th>
                <th>účast při hlasování</th>
                <th>podrobnosti</th>
                <th>frakce</th>
                <th>strana</th>
            </tr>
        </thead>
</table>
</wide>

<br>
<br>

## Účast při jmenovitých hlasováních

<wide><div id="graf1" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
</wide>

>Hlasování probíhá obvykle kolem poledne a ve velmi rychlém sledu: poslanci mnohdy hlasují o stovkách pozměňovacích návrhů.

>Během hlasování o parlamentní zprávě nebo o usnesení mohou poslanci znění příslušného dokumentu měnit prostřednictvím pozměňovacích návrhů. Ty mohou mít za cíl vypustit, přeformulovat, nahradit či rozšířit část projednávaného dokumentu. Poslanci nejprve hlasují o každém pozměňovacím návrhu zvlášť a teprve poté o celkovém dokumentu v takto pozměněném znění.

>Nejčastěji poslanci hlasují zvednutím ruky, přičemž úkolem předsedy zasedání je konstatovat, zda většina byla pro, nebo proti. V případě nejistoty požádá předseda o elektronické hlasování, které poskytne přesnější výsledek. Pokud o to požádá nějaká politická skupina nebo alespoň čtyřicet poslanců den před hlasováním, musejí poslanci hlasovat jmenovitě. V takovém případě se hlasování každého poslance jednotlivě zaznamenává, aby pak mohlo být zveřejněno v příloze zápisu, pokud ovšem nebylo zároveň požádáno o tajné hlasování.

>Na plenárním zasedání rozhoduje Evropský parlament nejčastěji absolutní většinou odevzdaných hlasů. K usnášeníschopnosti (k dosažení minimálního počtu poslanců, kteří musejí být přítomni, aby byl výsledek hlasování platný) stačí, aby byla v jednacím sále přítomna jedna třetina poslanců. Pokud předseda na žádost alespoň čtyřiceti poslanců prohlásí, že Parlament není usnášeníschopný, hlasování se odkládá na následující zasedání.

>Komise může na výsledek hlasování reagovat a informovat o svých závěrech. Na konci doby vyhrazené pro hlasování mohou poslanci, kteří si to přejí, znovu vystoupit a podat vysvětlení hlasování a předložit analýzu či zdůvodnit svůj postoj nebo postoj své skupiny.

>http://www.europarl.europa.eu/about-parliament/cs/organisation-and-rules/how-plenary-works