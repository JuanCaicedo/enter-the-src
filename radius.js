const radiuses = {
  '1': '1.000000000000000000000000000000',
  '2': '0.500000000000000000000000000000',
  '3': '0.464101615137755000000000000000',
  '4': '0.414213562373095000000000000000',
  '5': '0.370191908158750000000000000000',
  '6': '0.333333333333333000000000000000',
  '8': '0.302593388348611000000000000000',
  '9': '0.276768653914155000000000000000',
  '10': '0.231030727971009000000000000000',
  '11': '0.216664742924422000000000000000',
  '12': '0.205604646759568000000000000000',
  '13': '0.195224011018749000000000000000',
  '14': '0.190392146849054000000000000000',
  '15': '0.171580252187167000000000000000',
  '16': '0.176939130595962000000000000000',
  '17': '0.162903649276644000000000000000',
  '18': '0.147955904479076000000000000000',
  '19': '0.149316776635116000000000000000',
  '20': '0.136113748715698000000000000000',
  '21': '0.143639218073290000000000000000',
  '22': '0.140373604202715000000000000000',
  '23': '0.109935057298271000000000000000',
  '24': '0.124571676602365000000000000000',
  '25': '0.119281497082362000000000000000',
  '26': '0.117308193128287000000000000000',
  '27': '0.099891475491636200000000000000',
  '28': '0.112456192917836000000000000000',
  '29': '0.101443439719370000000000000000',
  '30': '0.102052146983690000000000000000',
  '31': '0.110896743722962000000000000000',
  '32': '0.095233634543869900000000000000',
  '33': '0.096495211836180600000000000000',
  '34': '0.088769396870677300000000000000',
  '35': '0.093167534622482300000000000000',
  '36': '0.090636019812819400000000000000',
  '37': '0.084780441044598200000000000000',
  '38': '0.085124290793257500000000000000',
  '39': '0.079053755252482400000000000000',
  '40': '0.077144406551184600000000000000',
  '41': '0.084056891551102400000000000000',
  '42': '0.083727722048957600000000000000',
  '43': '0.077430991968426800000000000000',
  '44': '0.071585034482445900000000000000',
  '45': '0.073327659015585100000000000000',
  '46': '0.061350836611808800000000000000',
  '47': '0.064226711397159600000000000000',
  '48': '0.064050965527517500000000000000',
  '49': '0.068016599535374000000000000000',
  '50': '0.064431250019376000000000000000',
  '51': '0.055357936509701700000000000000',
  '52': '0.060941964294951900000000000000',
  '53': '0.059427899132193700000000000000',
  '54': '0.059118899313165800000000000000',
  '55': '0.055566486573751500000000000000',
  '56': '0.058809466167290000000000000000',
  '57': '0.056518378953329900000000000000',
  '58': '0.053857977669531000000000000000',
  '59': '0.056187170977509800000000000000',
  '60': '0.053461745971097400000000000000',
  '61': '0.053067347691142900000000000000',
  '62': '0.051015713623419800000000000000',
  '63': '0.052296659580493500000000000000',
  '64': '0.051205534270349300000000000000',
  '65': '0.050363845271695600000000000000',
  '66': '0.052455214572021700000000000000',
  '67': '0.052808665543602500000000000000',
  '68': '0.048698388952304000000000000000',
  '69': '0.047616139347346600000000000000',
  '70': '0.046953611328749600000000000000',
  '71': '0.044697544014747700000000000000',
  '72': '0.047921005479935100000000000000',
  '73': '0.047999391024807100000000000000',
  '74': '0.046611199443266700000000000000',
  '75': '0.048177985321531600000000000000',
  '76': '0.046105105690792000000000000000',
  '77': '0.043960528386867300000000000000',
  '78': '0.048111071441266300000000000000',
  '79': '0.045480851715150700000000000000',
  '80': '0.042755787594217200000000000000',
  '81': '0.042470114403974500000000000000',
  '82': '0.040119450245221100000000000000',
  '83': '0.040383692791809300000000000000',
  '84': '0.040404296082092100000000000000',
  '85': '0.042839184771869200000000000000',
  '86': '0.039893629024679100000000000000',
  '87': '0.040044989354736800000000000000',
  '88': '0.038152584151467700000000000000',
  '89': '0.037944508264737900000000000000',
  '90': '0.038120684179894600000000000000',
  '91': '0.037076074142905900000000000000',
  '92': '0.037139157387836700000000000000',
  '93': '0.037171728434038500000000000000',
  '94': '0.035678640834630000000000000000',
  '95': '0.035833473421687500000000000000',
  '96': '0.034901525674418000000000000000',
  '97': '0.034448834376935000000000000000',
  '98': '0.034319395396667700000000000000',
  '99': '0.035143728176249100000000000000',
  '100': '0.033171072591752300000000000000',
  '101': '0.035429606129954400000000000000',
  '102': '0.033467777923713500000000000000',
  '103': '0.033591433162808500000000000000',
  '104': '0.031657646505353000000000000000',
  '105': '0.033197669087828600000000000000',
  '106': '0.033847678650439800000000000000',
  '107': '0.024419875342560800000000000000',
  '108': '0.031815899875003600000000000000',
  '109': '0.032029625821892300000000000000',
  '110': '0.032167537581900000000000000000',
  '111': '0.023458137251864300000000000000',
  '112': '0.031832810227901400000000000000',
  '113': '0.034381824253618100000000000000',
  '114': '0.033547454257059600000000000000',
  '115': '0.033822875295094700000000000000',
  '116': '0.022640394470616100000000000000',
  '117': '0.022646076827449100000000000000',
  '118': '0.022684119716339800000000000000',
  '119': '0.022472810968213600000000000000',
  '120': '0.033149076805336900000000000000',
  '121': '0.029801407983354400000000000000',
  '122': '0.028687516519107700000000000000',
  '123': '0.021888459482525100000000000000',
  '124': '0.029692733110078200000000000000',
  '125': '0.021844673742198600000000000000',
  '126': '0.021312983122234500000000000000',
  '127': '0.021883630279849900000000000000',
  '128': '0.029963670374722600000000000000',
  '129': '0.029199264154081100000000000000',
  '130': '0.034522884058702300000000000000',
  '131': '0.020599662129122300000000000000',
  '132': '0.020615942974736900000000000000',
  '133': '0.020914274271884000000000000000',
  '134': '0.028504777756176200000000000000',
  '135': '0.028249143599290900000000000000',
  '136': '0.029138539416166300000000000000',
  '137': '0.028664613832233200000000000000',
  '138': '0.032641500223519400000000000000',
  '139': '0.033130411620167700000000000000',
  '140': '0.028523343653032300000000000000',
  '141': '0.029725877534274100000000000000',
  '142': '0.031297121652607700000000000000',
  '143': '0.029636143964810100000000000000',
  '144': '0.019059396820369600000000000000',
  '145': '0.029322861172906300000000000000',
  '146': '0.019052915109533100000000000000',
  '147': '0.018951173268228900000000000000',
  '148': '0.028582572191650700000000000000',
  '149': '0.032374321248612900000000000000',
  '150': '0.016239540875490400000000000000',
  '151': '0.029861220014726500000000000000',
  '152': '0.018375839276536700000000000000',
  '153': '0.029235166127766700000000000000',
  '154': '0.034591698494079700000000000000',
  '155': '0.032533203932119700000000000000',
  '156': '0.031163837443555600000000000000',
  '157': '0.016691644419358200000000000000',
  '158': '0.034437527971226400000000000000',
  '159': '0.017335319329928000000000000000',
  '160': '0.016397173995692100000000000000',
  '161': '0.028516301362350700000000000000',
  '162': '0.028447541503890600000000000000',
  '163': '0.015673281014228500000000000000',
  '164': '0.028462078377142400000000000000',
  '165': '0.015404906700468900000000000000',
  '166': '0.029879476884635700000000000000',
  '167': '0.034468345077748500000000000000',
  '168': '0.015890499383827600000000000000',
  '170': '0.032411753008860900000000000000',
  '171': '0.032282514824708300000000000000',
  '172': '0.032541748869699100000000000000',
  '175': '0.033607699732942200000000000000',
  '176': '0.014109163910151600000000000000',
  '177': '0.029757488390071500000000000000',
  '179': '0.032631199306928100000000000000',
  '180': '0.029994557440017300000000000000',
  '181': '0.014255170553446100000000000000',
  '182': '0.031545051639608200000000000000',
  '183': '0.030016603660227000000000000000',
  '184': '0.028886618005959500000000000000',
  '186': '0.034599297295017900000000000000',
  '188': '0.032579847743274100000000000000',
  '192': '0.034571961582256400000000000000',
  '193': '0.032267887962680500000000000000',
  '194': '0.032502682976765400000000000000',
  '195': '0.032616361254626100000000000000',
  '197': '0.032476382629941000000000000000',
  '198': '0.029908127164842300000000000000',
  '199': '0.032480911680570000000000000000',
  '204': '0.032143802679821500000000000000',
  '210': '0.031373537242543500000000000000',
  '212': '0.031393612163052900000000000000',
  '213': '0.032677852680797400000000000000',
  '215': '0.029846675930259900000000000000',
  '216': '0.028879860880808300000000000000',
  '217': '0.029538345450387500000000000000',
  '218': '0.034715456302353300000000000000',
  '221': '0.032689798209249100000000000000',
  '224': '0.028622745013197800000000000000',
  '225': '0.029287737725594200000000000000',
  '227': '0.032436701420400800000000000000',
  '229': '0.028902612076120600000000000000',
  '230': '0.032308306481094400000000000000',
  '232': '0.032730629338637300000000000000',
  '235': '0.032589288042084100000000000000',
  '239': '0.031422243795662400000000000000',
  '247': '0.028596398296799200000000000000',
  '248': '0.031312655472808800000000000000',
  '250': '0.029828922596166300000000000000',
  '258': '0.032715024757068300000000000000',
  '259': '0.028616572095865000000000000000',
  '262': '0.029893574492180000000000000000',
  '263': '0.031564886999598100000000000000',
  '264': '0.029178134808616600000000000000',
  '286': '0.029313674301410300000000000000',
  '293': '0.028439866457100200000000000000',
  '305': '0.034738660266233700000000000000',
  '313': '0.029714345648646900000000000000',
  '317': '0.029854622953737900000000000000',
  '329': '0.029920721567123900000000000000',
  '336': '0.029820724632674300000000000000',
  '342': '0.029651807962718500000000000000',
  '343': '0.029573698614310700000000000000',
  '350': '0.031143295459076600000000000000',
  '355': '0.028433322404054900000000000000',
  '371': '0.034750867476345500000000000000',
  '400': '0.029743185478464600000000000000',
  '469': '0.028871363277124700000000000000',
  '477': '0.034535381762403800000000000000'
};

export function radiusForSmallerCircles(radius, numberOfCircles) {
  return radiuses[numberOfCircles] * radius;
}
