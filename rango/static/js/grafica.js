function Visualiza_datos(datos){
        $('#container').highcharts({
            chart: { type: 'bar', animation:'true' },
            title: { text: 'Votos de las tapas' },
            xAxis: { categories: datos[0] },
            yAxis: {
                title:{
                    text:'Votos'
                }
            },
            series: [{
                data: datos[1],
                name:"numero de votos",
               
            }],
        });
    }
