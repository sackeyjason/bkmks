let $ = document.querySelectorAll.bind(document);
let links = [];
let currentPage = 1;
const linksPerPage = 20;
const defaultLinks = [
    'https://medium.com/@ThingMaker/in-my-culture-29c6464072b2',
    'http://benjaminrosshoffman.com/humility-argument-honesty/',
    'http://redd.it/9h2jbi',
    'http://www.daviddfriedman.com/Academic/Property/Property.html',
    'http://www.overcomingbias.com/2019/02/checkmate-on-blackmail.html',
    'https://thezvi.wordpress.com/2019/02/19/blackmail/',
    'http://benjaminrosshoffman.com/blackmailers-are-privateers-in-the-war-on-hypocrisy/',
    'http://archive.wilsonquarterly.com/essays/bounty-hunters-pursuit-justice',
    'https://pedestrianobservations.com/2019/03/03/why-american-costs-are-so-high-work-in-progress/',
    'https://www.gwern.net/Littlewood',
    'https://slatestarcodex.com/2014/11/21/the-categories-were-made-for-man-not-man-for-the-categories/',
    'http://www.overcomingbias.com/2009/09/this-is-the-dream-time.html',
    'https://siderea.livejournal.com/1230660.html',
    'http://dresdencodak.com/2009/05/15/a-thinking-apes-critique-of-trans-simianism-repost',
    'https://www.lesswrong.com/posts/RWo4LwFzpHNQCTcYt/how-to-beat-procrastination',
    'https://www.lesswrong.com/posts/PBRWb2Em5SNeWYwwB/humans-are-not-automatically-strategic',
    'https://www.gwern.net/Longevity',
    'https://siderea.dreamwidth.org/1477942.html',
    'https://www.kalzumeus.com/2018/10/19/japanese-hometown-tax/',
    'https://slatestarcodex.com/2017/09/05/book-review-surfing-uncertainty/',
    'https://meltingasphalt.com/a-natural-history-of-beauty/',
    'http://mindingourway.com/stop-trying-to-try-and-try/',
    'https://marginalrevolution.com/marginalrevolution/2015/08/is-the-fda-too-conservative-or-too-aggressive.html',
    'https://www.statnews.com/2018/06/05/right-to-try-compassionate-use-pharma-compliance/',
    'https://mailchi.mp/ribbonfarm/against-waldenponding',
    'http://agentyduck.blogspot.com/2014/12/how-to-train-noticing.html',
    'https://www.lesswrong.com/posts/dC7mP5nSwvpL65Qu5/why-the-tails-come-apart',
    'https://www.theatlantic.com/science/archive/2016/03/phlegm-theories-of-consciousness/472812/',
    'https://www.econlib.org/archives/2011/03/the_case_agains_6.html',
    'https://www.theatlantic.com/magazine/archive/2017/09/innocence-is-irrelevant/534171/',
    'https://www.gwern.net/Complexity-vs-AI#technology-forecasting-errors-functional-fixedness-in-assuming-dependencies',
    'https://slatestarcodex.com/2018/07/18/fundamental-value-differences-are-not-that-fundamental/',
    'https://slatestarcodex.com/2018/07/18/the-whole-city-is-center/',
    'https://slatestarcodex.com/2018/07/24/value-differences-as-differently-crystallized-metaphysical-heuristics/',
    'http://slatestarcodex.com/2018/10/24/nominating-oneself-for-the-short-end-of-a-tradeoff/',
    'https://markmanson.net/diversify-your-identity',
    'http://www.shaman-australis.com/~claude/dreams.html',
    'https://harpers.org/blog/2011/07/in-defense-of-flogging-six-questions-for-peter-moskos/',
    'http://www.zocalopublicsquare.org/2011/11/30/how-doctors-die/ideas/nexus/',
    'http://www.zocalopublicsquare.org/2012/07/23/doctors-really-do-die-differently/ideas/nexus/',
    'https://thezvi.wordpress.com/2017/09/23/out-to-get-you/',
    'https://putanumonit.com/2016/05/17/rationality/',
    'http://benjaminrosshoffman.com/sabbath-hard-and-go-home/',
    'https://www.lesswrong.com/posts/ZoCitBiBv97WEWpX5/bring-back-the-sabbath',
    'https://meaningness.com/understanding',
    'https://www.jofreeman.com/joreen/tyranny.htm',
    'http://noahpinionblog.blogspot.com/2018/04/delong-vs-krugman-on-globalization.html',
    'https://agentyduck.blogspot.com/2016/01/when-your-left-arm-becomes-chicken-dont.html',
    'https://meaningness.com/metablog/communal-vs-systematic-politics',
    'https://www.newyorker.com/magazine/2018/07/23/can-economists-and-humanists-ever-be-friends',
    'https://noahpinionblog.blogspot.com/2018/07/yimbyism-explained-without-supply-and.html',
    'http://www.lightspeedmagazine.com/fiction/the-cambist-and-lord-iron-a-fairy-tale-of-economics/',
    'https://medium.com/@ThingMaker/dragon-army-theory-charter-8192dc64ea22',
    'https://medium.com/@ThingMaker/dragon-army-retrospective-597faf182e50',
    'http://slatestarcodex.com/2015/09/22/beware-systemic-change/',
    'http://www.econlib.org/archives/2015/12/the_meaning_of_2.html',
    'https://thingofthings.wordpress.com/2016/05/09/care-less-about-stis/',
    'http://www.starcitygames.com/magic/misc/2005_Stuck_In_The_Middle_With_Bruce.html',
    'https://quillette.com/2018/06/03/bryan-caplans-case-education-review/',
    'https://srconstantin.wordpress.com/2018/05/31/monopoly-a-manifesto-and-fact-post/',
    'https://www.forbes.com/sites/kalevleetaru/2017/01/15/what-if-facebook-and-twitter-made-you-read-an-article-before-you-could-share-it/',
    'https://aeon.co/essays/aristotle-was-right-about-mathematics-after-all',
    'https://medium.com/@ThingMaker/in-defense-of-punch-bug-68fcec56cd6b',
    'https://www.ianhogarth.com/blog/2018/6/13/ai-nationalism',
    'http://meltingasphalt.com/prickles-and-goo/',
    'https://www.lesswrong.com/posts/f6ZLxEWaankRZ2Crv/probability-is-in-the-mind',
    'https://www.lesswrong.com/posts/XhaKvQyHzeXdNnFKy/probability-is-subjectively-objective',
    'https://reason.com/archives/2017/06/13/young-men-are-playing-video-ga',
    'http://slatestarcodex.com/2018/05/16/basic-income-not-basic-jobs-against-hijacking-utopia/',
    'https://wiki.quanticle.net/Main/InstitutionalMemoryAndReverseSmuggling',
    'https://royallib.com/read/Chiang_Ted/Understand.html',
    'http://slatestarcodex.com/2014/05/27/on-types-of-typologies/',
    'https://thingofthings.wordpress.com/2015/10/16/coping-with-compulsive-behavior/',
    'http://slatestarcodex.com/2018/04/30/book-review-history-of-the-fabian-society/',
    'https://blog.givewell.org/2015/08/13/the-long-term-significance-of-reducing-global-catastrophic-risks/',
    'https://zerohplovecraft.wordpress.com/2018/05/11/the-gig-economy-2/',
    'https://eukaryotewritesblog.com/2018/03/13/caring-less/',
    'https://vividness.live/2015/10/05/buddhist-ethics-is-advertising/',
    'https://quarterly.demos.co.uk/article/issue-2/on-punitive-restoration/',
    'https://siderea.livejournal.com/1260265.html?format=light',
    'http://slatestarcodex.com/2016/01/30/staying-classy/',
    'https://equilibriabook.com/inadequacy-and-modesty/',
    'https://meteuphoric.wordpress.com/2017/09/27/for-signaling-part-i/',
    'https://www.theatlantic.com/magazine/archive/2018/01/whats-college-good-for/546590/?utm_source=atltw',
    'https://www.bloomberg.com/view/articles/2017-12-11/college-isn-t-a-waste-of-time',
    'http://slatestarcodex.com/2014/06/07/archipelago-and-atomic-communitarianism/',
    'https://putanumonit.com/2016/04/02/021_bummer/',
    'https://putanumonit.com/2017/02/27/familiar-finance/',
    'https://putanumonit.com/2017/05/09/time-well-spent/',
    'https://putanumonit.com/2017/05/27/strong-men-are-socialist-reports-a-study-that-previously-reported-the-opposite/',
    'https://www.plough.com/en/topics/life/technology/simulating-religion',
    'https://web.archive.org/web/20180224175641/https://www.bloomberg.com/view/articles/2017-03-28/how-utah-keeps-the-american-dream-alive',
    'https://www.bloomberg.com/view/articles/2018-02-23/you-can-t-have-denmark-without-danes',
    'https://www.lesserwrong.com/posts/wmEcNP3KFEGPZaFJk/the-craft-and-the-community-a-post-mortem-and-resurrection',
    'http://ferocioustruth.com/2017/automoderation/',
    'https://www.fs.blog/2016/04/narrative-fallacy/',
    'https://www.greaterwrong.com/posts/AqbWna2S85pFTsHH4/the-intelligent-social-web',
    'http://www.paulgraham.com/identity.html',
    'http://lesswrong.com/lw/4su/how_to_be_happy/',
    'http://www.econlib.org/library/Essays/rdPncl1.html',
    'http://www.paulgraham.com/love.html',
    'https://www.ribbonfarm.com/2010/07/26/a-big-little-idea-called-legibility/',
    'https://nickbostrom.com/astronomical/waste.html',
    'http://orwell.ru/library/articles/hanging/english/e_hanging',
    'http://lesswrong.com/lw/j5n/wait_vs_interrupt_culture/',
    'https://acesounderglass.com/2015/06/09/interpretive-labor/',
    'https://srconstantin.wordpress.com/2016/10/20/ra/',
    'https://blog.jaibot.com/the-copenhagen-interpretation-of-ethics/',
    'http://www.aaronsw.com/weblog/theoryofchange',
    'http://lesswrong.com/lw/375/ask_and_guess/',
    'http://lesswrong.com/lw/jis/tell_culture/',
    'http://malcolmocean.com/2015/06/reveal-culture/',
    'https://thingofthings.wordpress.com/2015/05/08/against-tell-culture/',
    'http://agentyduck.blogspot.com/2015/05/against-being-for-or-against-tell.html',
    'http://calteches.library.caltech.edu/51/2/CargoCult.htm',
    'https://samharris.org/the-pleasures-of-drowning/',
    'http://mindingourway.com/failing-with-abandon/',
    'http://mindingourway.com/rest-in-motion/',
    'http://www.orwell.ru/library/essays/politics/english/e_polit'
];

function submitForm(event) {
    event.preventDefault();
    let candidateUrl = $('#link-url')[0].value;
    $('#add-link .error')[0].innerHTML = '';
    if (isValidURL(candidateUrl)) {
        checkExistsUrl(candidateUrl, addLink.bind(this, candidateUrl));
    } else {
        $('#add-link .error')[0].innerHTML = 'That\'s not a valid url.';
    }
}

function addLink(url) {
    $('#submission')[0].innerHTML = url;
    // Show results page: unhide the #results div with css
    document.location.hash = 'results';
    currentPage = 1;
    // Append new url to start of links.
    links = [url].concat(links);
    localStorage.links = JSON.stringify(links);
    $('#link-url')[0].value = '';
    renderLinks();
    renderPagination();
}

function checkExistsUrl(url, callback) {
    // Not implemented
    // Needs backend to avoid cross-scripting errors?
    callback.apply();
}

function isValidURL(str) {
    // check for http/https://, and something-dot-something
    // (something: not . or #)
    return (str.match(/https?:\/\/[^\.#]+\.[^\.#]+/));
}

function renderLinks() {
    // Render visible links as unordered list of links
    // Set the start and end of current page of links according to pagination
    let markup = '<ul>';
    const offset = (currentPage - 1) * linksPerPage;
    const linkPage = links.slice(offset, offset + linksPerPage);
    linkPage.forEach(link => {
        markup += `<li><a target="_blank" href="${link}">${link}</a></li>`;
    });
    markup += '</ul>';
    $('#links-list')[0].innerHTML = markup;
}

function renderPagination() {
    // UI for navigating between pages
    let markup = '';
    const pageCount = Math.ceil(links.length / linksPerPage);

    // Prevent prev/next moving out of bounds
    if (currentPage > 1) {
        markup += '<a href="' + (currentPage - 1) + '">&lt;</a>';
    } else {
        markup += '<span>&lt;</span>';
    }

    for (let i = 1; i <= pageCount; i++) {
        // No link for current page
        markup += i === currentPage ?
            '<span class="current">' + i + '</span>' :
            `<a href="${i}">${i}</a>`;
    }

    if (currentPage < pageCount) {
        markup += '<a href="' + (currentPage + 1) + '">&gt;</a>';
    } else {
        markup += '<span>&gt;</span>';
    }
    $('#pagination')[0].innerHTML = markup;
}

function paginationClick(event) {
    if (event.target.nodeName === 'A') {
        event.preventDefault();
        let targetPage = parseInt(event.target.getAttribute('href'));
        currentPage = targetPage;
        renderLinks();
        renderPagination();
    }
}

function init() {
    if (!localStorage.links) {
        // Populate localstorage if empty
        localStorage.links = JSON.stringify(defaultLinks);
    }
    links = JSON.parse(localStorage.links);
    $('#add-link')[0].addEventListener('submit', submitForm);
    $('#pagination')[0].addEventListener('click', paginationClick);
    renderLinks();
    renderPagination();
    // Reload while on results page -> back to main view
    if (document.location.hash = 'results') {
        document.location.hash = '';
    }
}

init();
