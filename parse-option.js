/**
 * Created by zh.l.y on 2016/11/24.
 * 从粘贴板中解析出选择题的题干和选项
 */

var keyCountObj = {};
var keyList = [];
var fromB = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

var stringParse = function (string) {
    string = string || '';

    if (string) {

        keyCountObj = {
            '\\nA\\.': 0,
            '\\nB\\.': 0,
            '\\nC\\.': 0,
            '\\nD\\.': 0,
            '\\nE\\.': 0,
            '\\nF\\.': 0,
            '\\nG\\.': 0,
            '\\nH\\.': 0,
            '\\nI\\.': 0,
            '\\nJ\\.': 0,
            '\\nA\\．': 0,
            '\\nB\\．': 0,
            '\\nC\\．': 0,
            '\\nD\\．': 0,
            '\\nE\\．': 0,
            '\\nF\\．': 0,
            '\\nG\\．': 0,
            '\\nH\\．': 0,
            '\\nI\\．': 0,
            '\\nJ\\．': 0,
            '\\nA': 0,
            '\\nB': 0,
            '\\nC': 0,
            '\\nD': 0,
            '\\nE': 0,
            '\\nF': 0,
            '\\nG': 0,
            '\\nH': 0,
            '\\nI': 0,
            '\\nJ': 0,

            '\\n\\sA\\．': 0,
            '\\n\\sB\\．': 0,
            '\\n\\sC\\．': 0,
            '\\n\\sD\\．': 0,
            '\\n\\sE\\．': 0,
            '\\n\\sF\\．': 0,
            '\\n\\sG\\．': 0,
            '\\n\\sH\\．': 0,
            '\\n\\sI\\．': 0,
            '\\n\\sJ\\．': 0,

            '\\n\\sA\\.': 0,
            '\\n\\sB\\.': 0,
            '\\n\\sC\\.': 0,
            '\\n\\sD\\.': 0,
            '\\n\\sE\\.': 0,
            '\\n\\sF\\.': 0,
            '\\n\\sG\\.': 0,
            '\\n\\sH\\.': 0,
            '\\n\\sI\\.': 0,
            '\\n\\sJ\\.': 0,

            '\\n\\sA\\s': 0,
            '\\n\\sB\\s': 0,
            '\\n\\sC\\s': 0,
            '\\n\\sD\\s': 0,
            '\\n\\sE\\s': 0,
            '\\n\\sF\\s': 0,
            '\\n\\sG\\s': 0,
            '\\n\\sH\\s': 0,
            '\\n\\sI\\s': 0,
            '\\n\\sJ\\s': 0,

            '\\n\\sA': 0,
            '\\n\\sB': 0,
            '\\n\\sC': 0,
            '\\n\\sD': 0,
            '\\n\\sE': 0,
            '\\n\\sF': 0,
            '\\n\\sG': 0,
            '\\n\\sH': 0,
            '\\n\\sI': 0,
            '\\n\\sJ': 0,

            '\\sA\\．': 0,
            '\\sB\\．': 0,
            '\\sC\\．': 0,
            '\\sD\\．': 0,
            '\\sE\\．': 0,
            '\\sF\\．': 0,
            '\\sG\\．': 0,
            '\\sH\\．': 0,
            '\\sI\\．': 0,
            '\\sJ\\．': 0,

            '\\sA\\.': 0,
            '\\sB\\.': 0,
            '\\sC\\.': 0,
            '\\sD\\.': 0,
            '\\sE\\.': 0,
            '\\sF\\.': 0,
            '\\sG\\.': 0,
            '\\sH\\.': 0,
            '\\sI\\.': 0,
            '\\sJ\\.': 0,

            '\\nA\\s': 0,
            '\\nB\\s': 0,
            '\\nC\\s': 0,
            '\\nD\\s': 0,
            '\\nE\\s': 0,
            '\\nF\\s': 0,
            '\\nG\\s': 0,
            '\\nH\\s': 0,
            '\\nI\\s': 0,
            '\\nJ\\s': 0,

            '\\sA\\s': 0,
            '\\sB\\s': 0,
            '\\sC\\s': 0,
            '\\sD\\s': 0,
            '\\sE\\s': 0,
            '\\sF\\s': 0,
            '\\sG\\s': 0,
            '\\sH\\s': 0,
            '\\sI\\s': 0,
            '\\sJ\\s': 0,

            '\\sA': 0,
            '\\sB': 0,
            '\\sC': 0,
            '\\sD': 0,
            '\\sE': 0,
            '\\sF': 0,
            '\\sG': 0,
            '\\sH': 0,
            '\\sI': 0,
            '\\sJ': 0,
            'A': 0,
            'B': 0,
            'C': 0,
            'D': 0
            , 'E': 0
            , 'F': 0
            , 'G': 0
            , 'H': 0
            , 'I': 0
            , 'J': 0
        };
        keyList = [];

        var regexp_s = '' +
            '(\\n\\sA\\．)|(\\n\\sB\\．)|(\\n\\sC\\．)|(\\n\\sD\\．)|(\\n\\sE\\．)|(\\n\\sF\\．)|(\\n\\sG\\．)|(\\n\\sH\\．)|(\\n\\sI\\．)|(\\n\\sJ\\．)' +
            '|(\\n\\sA\\.)|(\\n\\sB\\.)|(\\n\\sC\\.)|(\\n\\sD\\.)|(\\n\\sE\\.)|(\\n\\sF\\.)|(\\n\\sG\\.)|(\\n\\sH\\.)|(\\n\\sI\\.)|(\\n\\sJ\\.)' +
            '|(\\n\\sA\\s)|(\\n\\sB\\s)|(\\n\\sC\\s)|(\\n\\sD\\s)|(\\n\\sE\\s)|(\\n\\sF\\s)|(\\n\\sG\\s)|(\\n\\sH\\s)|(\\n\\sI\\s)|(\\n\\sJ\\s)' +
            '|(\\nA\\．)|(\\nB\\．)|(\\nC\\．)|(\\nD\\．)|(\\nE\\．)|(\\nF\\．)|(\\nG\\．)|(\\nH\\．)|(\\nI\\．)|(\\nJ\\．)' +
            '|(\\nA\\.)|(\\nB\\.)|(\\nC\\.)|(\\nD\\.)|(\\nE\\.)|(\\nF\\.)|(\\nG\\.)|(\\nH\\.)|(\\nI\\.)|(\\nJ\\.)' +
            '|(\\nA\\s)|(\\nB\\s)|(\\nC\\s)|(\\nD\\s)|(\\nE\\s)|(\\nF\\s)|(\\nG\\s)|(\\nH\\s)|(\\nI\\s)|(\\nJ\\s)' +
            '|(\\nA)|(\\nB)|(\\nC)|(\\nD)|(\\nE)|(\\nF)|(\\nG)|(\\nH)|(\\nI)|(\\nJ)' +
            '|(\\sA\\．)|(\\sB\\．)|(\\sC\\．)|(\\sD\\．)|(\\sE\\．)|(\\sF\\．)|(\\sG\\．)' +
            '|(\\sA\\.)|(\\sB\\.)|(\\sC\\.)|(\\sD\\.)|(\\sE\\.)|(\\sF\\.)|(\\sG\\.)|(\\sH\\.)|(\\sI\\.)|(\\sJ\\.)' +
            '|(\\sA\\s)|(\\sB\\s)|(\\sC\\s)|(\\sD\\s)|(\\sE\\s)|(\\sF\\s)|(\\sG\\s)|(\\sH\\s)|(\\sI\\s)|(\\sJ\\s)' +
            '|(\\sA)|(\\sB)|(\\sC)|(\\sD)|(\\sE)|(\\sF)|(\\sG)|(\\sH)|(\\sI)|(\\sJ)' +
            '|(A)|(B)|(C)|(D)|(E)|(F)|(G)|(H)|(I)|(J)';

        var regexp = new RegExp(regexp_s, 'g');
        var targetS = string.replace(regexp, function (c) {

            if (/\n/g.test(c)) {
                c = c.replace(/\n/, '\\n');
            }
            if (/\s/g.test(c)) {
                c = c.replace(/\s/g, '\\s');
            }
            if (/\．/g.test(c)) {
                c = c.replace(/\．/g, '\\．');
            }
            if (/\./g.test(c)) {
                c = c.replace(/\./g, '\\.');
            }
            keyCountObj[c]++;

            keyList.push(c + keyCountObj[c]);

            return '#{' + c + keyCountObj[c] + '}';
        });

        var keyListReverse = ([].concat(keyList)).reverse();

        var optionAObj = findOptionA(keyListReverse);


        if (optionAObj.optionA) {

            var optionPart = targetS.split('#{' + optionAObj.optionA + '}')[1];

            if(!optionPart){
                return {
                    body:string
                }
            }
            var optionKeyList = keyList.slice((keyList.length - optionAObj.optionAPos));


            if (optionAObj.optionAPos) {
                // 将题干的部分的keys 还原回原字符
                targetS = reduction(targetS, optionAObj.optionA, keyList.slice(0, ( keyList.length - optionAObj.optionAPos - 1)));
            }


           // 获取选项部分的分割点（key）list
            var optionFromB = findOptionBs(optionPart);

            // 针对所有选项分成两列的处理
            optionFromB = towColumn(optionFromB,optionPart);


            var newOptionBs = filterOptionBs(optionFromB);
            optionFromB = newOptionBs.optionFromB;

        } else {

            console.log('can not find optionAObj.optionA[\\nA]');
            return {
                body: string
            };
        }


        if (optionFromB) {
            var optionFromBCopy = optionFromB.sort(function (a, b) {
                return a > b
            }).join('');
            if (optionFromBCopy != optionFromB.join('')) {
                flag = false;
            }
        }
// 将选项部分的key还原成原字符
        targetS = reduction(targetS, optionAObj.optionA, optionKeyList, newOptionBs.newOptionFromB);

        return contentSplit(optionAObj, targetS, newOptionBs.newOptionFromB);
    }
};

/**
 * 查找A选项位置，优先查找最后一个‘\nA’，如果没有则查找'\sA'
 * @param keyListReverse 从后面查找，将文本截取备选key数组反转，
 * @returns {{optionA: *, optionAPos: *}}
 */
var findOptionA = function(keyListReverse){
    var optionA, optionAPos;
    for (var i = 0; i < keyListReverse.length; i++) {
        if (/^\\n(\\s)?A(\\.|\\．|\\s)?[0-9]*$/g.test(keyListReverse[i])) {
            optionA = keyListReverse[i];
            optionAPos = i;
            break;
        }
    }

    if(!optionA){
        for (var i = 0; i < keyListReverse.length; i++) {
            if (/^\\sA(\\.|\\．|\\s)[0-9]*$/g.test(keyListReverse[i])) {
                optionA = keyListReverse[i];
                optionAPos = i;
                break;
            }
        }
    }

    return {
        optionA:optionA,
        optionAPos:optionAPos
    }

};


/**
 * 查找 获取选项部分的分割点（key）list
 * @param optionPart
 * @returns {Array|{index: number, input: string}|*}
 */
var findOptionBs = function(optionPart){
    var optionFromB = optionPart.match(/#{\\n(\\s)?[B-J](\\.|\\．|\\s)?[0-9]*}/g);
    if (!optionFromB) {
        optionFromB = optionPart.match(/#{\\s[B-J]\\．[0-9]*}/g);
    }
    if (!optionFromB) {
        optionFromB = optionPart.match(/#{\\s[B-J]\\.[0-9]*}/g);
    }
    if (!optionFromB) {
        optionFromB = optionPart.match(/#{\\s[B-J]\\s[0-9]*}/g);
    }
    if (!optionFromB) {
        optionFromB = optionPart.match(/#{\\s[B-J][0-9]*}/g);
    }
    if (!optionFromB) {
        optionFromB = optionPart.match(/#{[B-J][0-9]*}/g);
    }

    return optionFromB;
};

/**
 *选项分成两列的情况
 * 1. 我是题干~~~~
 *  A. ~~   B. ~~
 *  C. ~~   D. ~~
 */
var towColumn =  function(optionFromB,optionPart){

    if (optionFromB && /#{\\n(\\s)?C(\\.|\\．|\\s)[0-9]*/.test(optionFromB[0])) {


        var optionKey = '';
        if (/\\．/.test(optionFromB[0])) {
            optionKey = '．';
        } else if (/\\./.test(optionFromB[0])) {
            optionKey = '.';
        } else {
            optionKey = 's';
        }
        var evenOpts = optionPart.match(new RegExp('#{\\\\s(B|D|F|H|J)\\\\' + optionKey + '[0-9]*}', 'g')) || [];
        var oddOpts = optionPart.match(new RegExp('#{\\\\n(\\\\s)?(C|E|G|I)\\\\' + optionKey + '[0-9]*}', 'g')) || [];
        var newOptionFromB = [];
        for (var i = 0; i < 5; i++) {
            if (evenOpts[i]) {
                newOptionFromB.push(evenOpts[i]);
                if (oddOpts[i]) {
                    newOptionFromB.push(oddOpts[i]);
                }
            } else {
                break;
            }

        }
        optionFromB =  [].concat(newOptionFromB);
    }
    return optionFromB;

};

/**
 *过滤选项部分的分割点（key）list，只留下B、C、D等节点
 */
var filterOptionBs = function(optionFromB){

    var newOptionFromB = [];
    if(optionFromB){

        // 过滤选项部分的keys
        var newOptionFromBPos = 0;
        for (var m = 0; m < fromB.length; m++) {
            var noMatch = true;
            for (var n = newOptionFromBPos; n < optionFromB.length; n++) {
                var regexp = new RegExp(fromB[m]);
                if (regexp.test(optionFromB[n])) {
                    newOptionFromBPos = (n + 1);
                    newOptionFromB.push(optionFromB[n]);
                    noMatch = false;
                    break;
                }
            }
            if (noMatch) {
                break;
            }
        }
    }


    return {
        optionFromB:optionFromB,
        newOptionFromB:newOptionFromB
    };
};


/**
 *将targetS 还原回原字符串，只保留分隔符
 */
var reduction = function(s, optionA, list1, list2){

    for(var i = 0; i < list1.length; i++){


        if(list1[i] == optionA ){
            continue;
        }

        var flag = true;
        if(list2){
            for(var j = 0; j < list2.length; j++){
                if( ('#{' + list1[i] +'}') == list2[j]){
                    flag = false;
                    break;
                }
            }
        }

        if(flag ){
            var c = list1[i].replace(/[0-9]*/g, '');
            c = c.replace(/\\s/g, ' ');
            c = c.replace(/\\n/g, ' \n ');
            c = c.replace(/\\./g, '.');
            c = c.replace(/\\．/g, '．');
            var regexp = list1[i].replace(/\\/g, '\\\\');
            s = s.replace((new RegExp( '#{'+ regexp +'}')), c);

        } else {
            continue;
        }

    }

    return s || '';

};


/**
 * 根据分析取到的截取关键点，将内容进行切割得到body, A, B, C, D......
 * @param optionAObj  选项A
 * @param targetS   待切割文本
 * @param newOptionFromB   除选项A之外的分割点
 * @return
 * {
 *      body    : '~~~~',
 *      A       : '~~~',
 *      B       : '~~~~'
 * }
 */
var contentSplit = function(optionAObj, targetS,newOptionFromB){
    var quizData = {};
    if (optionAObj.optionA) {
        optionAObj.optionA = optionAObj.optionA.replace(/\\/g, '\\\\')
        targetS = targetS.replace((new RegExp('#{' + optionAObj.optionA + '}')), '{|||}');
        for (var i = 0; i < newOptionFromB.length; i++) {
            newOptionFromB[i] = newOptionFromB[i].replace(/\\/g, '\\\\')
            targetS = targetS.replace((new RegExp(newOptionFromB[i])), '{|||}');
        }

        var resultss = targetS.split('{|||}');
        quizData.body = resultss[0];
        (resultss.length > 1 && optionAObj.optionA) ? quizData[optionAObj.optionA.match(/[A-J]/g)[0]] = resultss[1] : null;

        for (var i = 0; i < newOptionFromB.length; i++) {
            quizData[newOptionFromB[i].match(/[A-J]/g)[0]] = resultss[i + 2];
        }

    }


    return quizData;
};


/**
 * 判断是否需要调用选择题结构分析方法
 */

var  isCallThis = function(editor){

    var editorContainer  = $('#' + editor.key).closest('.sub-question-item').length > 0 ?
                        $('#' + editor.key).closest('.sub-question-item'): $('#' + editor.key).closest('.wgt-table') ;
    var quizType = editorContainer.attr('qType');
    var isBody  = $('#' + editor.key).hasClass('qb-body');
    var isEmpty = editor.getContent() == '' ? true : false;



    if(quizType == 1 && isBody && isEmpty){
        // 只有在题干中发生粘贴行为，且题干内容为空，题型为选择题时，才会返回true
        return true;
    } else {
        return false;
    }

};
