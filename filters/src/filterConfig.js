var filters = {
    'client':{
        'Aetna': [
            {'name':'market','type': 'select','id':1,'placeholder':'Select Market','label': 'Market'},
            {'name':'submarket','type': 'select','id':2,'placeholder':'Select SubMarket','label': 'Submarket'},
            {'name':'state','type': 'select','id':3,'placeholder':'Select State','label': 'State'},
            {'name':'county','type': 'select','id':4,'placeholder':'Select County','label': 'County'},
            {'name':'footprint','type': 'select','id':5,'placeholder':'Select Footprint','label': 'Footprint'},
            {'name':'plantype','type': 'select','id':6,'placeholder':'Select Plantype','label': 'Plantype'},
            {'name':'snpplans','type': 'select','id':7,'placeholder':'Select SNP Plans','label': 'SNP Plans'},
            {'name':'description','type': 'select','id':8,'placeholder':'Select Description','label': 'Description'},
            {'name':'plans','type': 'select','id':9,'placeholder':'Select Plans','label': 'Plans'},
            {'name':'benefits','type': 'select','id':10,'placeholder':'Select Benefits','label': 'Benefits'},
            {'name':'coins','type': 'select','id':11,'placeholder':'Select Coins/Copay','label': 'Coins/Copay'}
        ],
        'Baycare': [
            {'name':'state','type': 'select','id':1,'placeholder':'Select State','label': 'State'},
            {'name':'county','type': 'select','id':2,'placeholder':'Select County','label': 'County'},
            {'name':'plantype','type': 'select','id':3,'placeholder':'Select Plantype','label': 'Plantype'},
            {'name':'snpplans','type': 'select','id':4,'placeholder':'Select SNP Plans','label': 'SNP Plans'},
            {'name':'description','type': 'select','id':5,'placeholder':'Select Description','label': 'Plan Description'},
            {'name':'plans','type': 'select','id':6,'placeholder':'Select Plans','label': 'Plans'},
            {'name':'benefits','type': 'select','id':7,'placeholder':'Select Benefits','label': 'Benefits'}
        ],
        'BCBS': [
            {'name':'state','type': 'select','id':1,'placeholder':'Select State','label': 'State'},
            {'name':'county','type': 'select','id':2,'placeholder':'Select County','label': 'County'},
            {'name':'plantype','type': 'select','id':3,'placeholder':'Select Plantype','label': 'Plantype'},
            {'name':'snpplans','type': 'select','id':4,'placeholder':'Select SNP Plans','label': 'SNP Plans'},
            {'name':'description','type': 'select','id':5,'placeholder':'Select Description','label': 'Plan Description'},
            {'name':'plans','type': 'select','id':6,'placeholder':'Select Plans','label': 'Plans'},
            {'name':'benefits','type': 'select','id':7,'placeholder':'Select Benefits','label': 'Benefits'}
        ],
        'CDPHP': [
            {'name':'state','type': 'select','id':1,'placeholder':'Select State','label': 'State'},
            {'name':'sales','type': 'select','id':2,'placeholder':'Select Sales Region','label': 'Sales Region'},
            {'name':'county','type': 'select','id':3,'placeholder':'Select County','label': 'County'},
            {'name':'plantype','type': 'select','id':4,'placeholder':'Select Plantype','label': 'Plantype'},
            {'name':'snpplans','type': 'select','id':5,'placeholder':'Select SNP Plans','label': 'SNP Plans'},
            {'name':'description','type': 'select','id':6,'placeholder':'Select Description','label': 'Plan Description'},
            {'name':'plans','type': 'select','id':7,'placeholder':'Select Plans','label': 'Plans'},
            {'name':'benefits','type': 'select','id':8,'placeholder':'Select Benefits','label': 'Benefits'}
        ],
        'Healthfirst': [
            {'name':'sales','type': 'select','id':2,'placeholder':'Select Sales Region','label': 'Sales Region'},
            {'name':'state','type': 'select','id':1,'placeholder':'Select State','label': 'State'},
            {'name':'county','type': 'select','id':3,'placeholder':'Select County','label': 'County'},
            {'name':'plantype','type': 'select','id':4,'placeholder':'Select Plantype','label': 'Plantype'},
            {'name':'snpplans','type': 'select','id':5,'placeholder':'Select SNP Plans','label': 'SNP Plans'},
            {'name':'hfproduct ','type': 'select','id':5,'placeholder':'Select HF Product Cuts','label': 'HF Product Cuts'},
            {'name':'description','type': 'select','id':6,'placeholder':'Select Description','label': 'Plan Description'},
            {'name':'plans','type': 'select','id':7,'placeholder':'Select Plans','label': 'Plans'},
            {'name':'benefits','type': 'select','id':8,'placeholder':'Select Benefits','label': 'Benefits'}
        ],
    },
}
 
export default filters;