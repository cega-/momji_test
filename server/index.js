const express = require('express');

const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');

const listOptionPill =
[
    'Affinité',
    'Générosité',
    'Affirmé',
    'Génial',
    'Déterminé',
    'Aligné',
    'Eloigné'
]

app.use(bodyParser.json());
app.use(cors());

app.post('/listpilloption/', (req, res) => {
  var ret = new Array()
//  && !listPillSelected.some(entryInLIst => entryInLIst === entry)

listOptionPill.map((entry) =>
        (
            (entry.toLowerCase().includes(req.body.searchParam) || req.body.searchParam.length === 0) ? ret.push(entry) : null
        )
    )
  

  return res.json({ success: true, data: ret });
//    return res.json(ret)
});

app.get('/getlistpilloption/', (req, res) => {
  return res.json({ success: true, data: listOptionPill });
    return res.json(ret)
});

app.listen(port, () => {
  console.log(`Notes app listening on port ${port}`);
});

