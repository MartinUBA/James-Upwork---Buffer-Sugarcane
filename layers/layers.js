ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([58.551861, 5.787635, 99.399285, 35.922803]);
var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BaseMapGrey_1 = new ol.layer.Tile({
            'title': 'Base Map (Grey)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Sugarcane_3 = new ol.format.GeoJSON();
var features_Sugarcane_3 = format_Sugarcane_3.readFeatures(json_Sugarcane_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sugarcane_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sugarcane_3.addFeatures(features_Sugarcane_3);
var lyr_Sugarcane_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sugarcane_3, 
                style: style_Sugarcane_3,
                popuplayertitle: "Sugarcane ",
                interactive: false,
    title: 'Sugarcane <br />\
    <img src="styles/legend/Sugarcane_3_0.png" /> 10 - 75 kTons<br />\
    <img src="styles/legend/Sugarcane_3_1.png" /> 75 - 80 kTons<br />\
    <img src="styles/legend/Sugarcane_3_2.png" /> 80 - 100 kTons<br />\
    <img src="styles/legend/Sugarcane_3_3.png" /> 100 - 125 kTons<br />\
    <img src="styles/legend/Sugarcane_3_4.png" /> 125 - 150 kTons<br />\
    <img src="styles/legend/Sugarcane_3_5.png" /> 150 - 300 kTons<br />\
    <img src="styles/legend/Sugarcane_3_6.png" /> 300 - 500 kTons<br />\
    <img src="styles/legend/Sugarcane_3_7.png" /> > 500 kTons<br />'
        });
var format_IndiaBoundary_4 = new ol.format.GeoJSON();
var features_IndiaBoundary_4 = format_IndiaBoundary_4.readFeatures(json_IndiaBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndiaBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaBoundary_4.addFeatures(features_IndiaBoundary_4);
var lyr_IndiaBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndiaBoundary_4, 
                style: style_IndiaBoundary_4,
                popuplayertitle: "India Boundary",
                interactive: false,
                    title: '<img src="styles/legend/IndiaBoundary_4.png" /> India Boundary'
                });
var format_Sugarcane50KMArea_5 = new ol.format.GeoJSON();
var features_Sugarcane50KMArea_5 = format_Sugarcane50KMArea_5.readFeatures(json_Sugarcane50KMArea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sugarcane50KMArea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sugarcane50KMArea_5.addFeatures(features_Sugarcane50KMArea_5);
var lyr_Sugarcane50KMArea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sugarcane50KMArea_5, 
                style: style_Sugarcane50KMArea_5,
                popuplayertitle: "Sugarcane 50KM Area",
                interactive: true,
                    title: '<img src="styles/legend/Sugarcane50KMArea_5.png" /> Sugarcane 50KM Area'
                });
var format_PaperMills_6 = new ol.format.GeoJSON();
var features_PaperMills_6 = format_PaperMills_6.readFeatures(json_PaperMills_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMills_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMills_6.addFeatures(features_PaperMills_6);
var lyr_PaperMills_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMills_6, 
                style: style_PaperMills_6,
                popuplayertitle: "Paper Mills",
                interactive: true,
                    title: '<img src="styles/legend/PaperMills_6.png" /> Paper Mills'
                });
var format_PaperMillsTOP20Sugarcane50km_7 = new ol.format.GeoJSON();
var features_PaperMillsTOP20Sugarcane50km_7 = format_PaperMillsTOP20Sugarcane50km_7.readFeatures(json_PaperMillsTOP20Sugarcane50km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMillsTOP20Sugarcane50km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMillsTOP20Sugarcane50km_7.addFeatures(features_PaperMillsTOP20Sugarcane50km_7);
var lyr_PaperMillsTOP20Sugarcane50km_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMillsTOP20Sugarcane50km_7, 
                style: style_PaperMillsTOP20Sugarcane50km_7,
                popuplayertitle: "Paper Mills TOP 20 Sugarcane 50 km",
                interactive: true,
    title: 'Paper Mills TOP 20 Sugarcane 50 km<br />\
    <img src="styles/legend/PaperMillsTOP20Sugarcane50km_7_0.png" /> 156267 - 623954 Tons<br />\
    <img src="styles/legend/PaperMillsTOP20Sugarcane50km_7_1.png" /> 623954 - 1091641 Tons<br />\
    <img src="styles/legend/PaperMillsTOP20Sugarcane50km_7_2.png" /> 1091641 - 1559328 Tons<br />\
    <img src="styles/legend/PaperMillsTOP20Sugarcane50km_7_3.png" /> 1559328 - 2027015 Tons<br />\
    <img src="styles/legend/PaperMillsTOP20Sugarcane50km_7_4.png" /> 2027015 - 2494702 Tons<br />'
        });
var group_PaperMills = new ol.layer.Group({
                                layers: [lyr_PaperMills_6,lyr_PaperMillsTOP20Sugarcane50km_7,],
                                fold: "open",
                                title: "Paper Mills"});
var group_Feedstock = new ol.layer.Group({
                                layers: [lyr_Sugarcane_3,],
                                fold: "open",
                                title: "Feedstock"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRIPhysical_0,lyr_BaseMapGrey_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base map "});

lyr_ESRIPhysical_0.setVisible(true);lyr_BaseMapGrey_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Sugarcane_3.setVisible(true);lyr_IndiaBoundary_4.setVisible(true);lyr_Sugarcane50KMArea_5.setVisible(false);lyr_PaperMills_6.setVisible(true);lyr_PaperMillsTOP20Sugarcane50km_7.setVisible(true);
var layersList = [group_Basemap,group_Feedstock,lyr_IndiaBoundary_4,lyr_Sugarcane50KMArea_5,group_PaperMills];
lyr_Sugarcane_3.set('fieldAliases', {'Sugarcane': 'Sugarcane', });
lyr_IndiaBoundary_4.set('fieldAliases', {'fid_1': 'fid_1', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', });
lyr_Sugarcane50KMArea_5.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'Sugarcane': 'Sugarcane', });
lyr_PaperMills_6.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'Sugarcane': 'Sugarcane', });
lyr_PaperMillsTOP20Sugarcane50km_7.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'Sugarcane': 'Sugarcane', 'N° TOP 20': 'N° TOP 20', 'Site Code_': 'Site Code_', 'Sugarc50k': 'Sugarc50k', });
lyr_Sugarcane_3.set('fieldImages', {'Sugarcane': 'TextEdit', });
lyr_IndiaBoundary_4.set('fieldImages', {'fid_1': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_Sugarcane50KMArea_5.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'Sugarcane': 'TextEdit', });
lyr_PaperMills_6.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'Sugarcane': 'TextEdit', });
lyr_PaperMillsTOP20Sugarcane50km_7.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'Sugarcane': 'TextEdit', 'N° TOP 20': 'TextEdit', 'Site Code_': 'TextEdit', 'Sugarc50k': 'TextEdit', });
lyr_Sugarcane_3.set('fieldLabels', {'Sugarcane': 'inline label - always visible', });
lyr_IndiaBoundary_4.set('fieldLabels', {'fid_1': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', });
lyr_Sugarcane50KMArea_5.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'Sugarcane': 'hidden field', });
lyr_PaperMills_6.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'Sugarcane': 'inline label - always visible', });
lyr_PaperMillsTOP20Sugarcane50km_7.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'Sugarcane': 'hidden field', 'N° TOP 20': 'inline label - always visible', 'Site Code_': 'no label', 'Sugarc50k': 'inline label - always visible', });
lyr_PaperMillsTOP20Sugarcane50km_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});