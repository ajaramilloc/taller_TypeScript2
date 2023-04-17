import { Serie } from './serie.js';
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=960&h=540"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://estaticos-cdn.elperiodico.com/clip/ee1955b1-05da-4b9d-b38c-68111edb88cc_alta-libre-aspect-ratio_default_0.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://www.eltiempo.com/files/image_1200_680/uploads/2022/07/19/62d6c68bda149.png"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "data:image/jpeg;base64,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"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "data:image/jpeg;base64,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"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b092a34a758c9a6a9b261d3c9ed8d0eb05bcfa685b72d91a0ea03cff2ac5712e._RI_V_TTW_.jpg"),
];
