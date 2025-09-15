export type Language = "en" | "ja";

export type MultiLangText = {
  en: string;
  ja: string;
};

export type Texts = {
  // Window title
  title: MultiLangText;

  // Language Switcher
  language: MultiLangText;

  // Menu
  menu_home: MultiLangText;
  menu_research: MultiLangText;
  menu_research_theme: MultiLangText;
  menu_research_proj: MultiLangText;
  menu_research_hai: MultiLangText;
  menu_research_hri: MultiLangText;
  menu_research_ca: MultiLangText;
  menu_research_as: MultiLangText;
  menu_research_cn: MultiLangText;
  menu_member: MultiLangText;
  menu_publication: MultiLangText;
  menu_publication_journal: MultiLangText;
  menu_publication_international: MultiLangText;
  menu_publication_domestic: MultiLangText;
  menu_links: MultiLangText;
  menu_for_collaborations: MultiLangText;
  menu_access: MultiLangText;
  menu_class: MultiLangText;
  menu_b3: MultiLangText;
  menu_activity: MultiLangText;
  menu_activity_award: MultiLangText;
  menu_activity_media: MultiLangText;
  menu_activity_talk: MultiLangText;

  // Home
  home_imailab: MultiLangText;
  home_message: MultiLangText;
  home_keywords: MultiLangText;

  // Research
  research_head: MultiLangText;
  research_layer_cap: MultiLangText;
  research_exp: MultiLangText;

  // Research - Interactive SmartClerk
  research_isc_head: MultiLangText;
  research_isc_short: MultiLangText;
  research_isc_exp: MultiLangText;

  // Research - SCAINs
  research_scains_head: MultiLangText;
  research_scains_short: MultiLangText;
  research_scains1_exp: MultiLangText;
  research_scains2_exp: MultiLangText;

  // Research - CLOZER
  research_closer_head: MultiLangText;
  research_closer_short: MultiLangText;
  research_closer_exp: MultiLangText;

  // Research - RelBot
  research_relbot_head: MultiLangText;
  research_relbot_short: MultiLangText;
  research_relbot_exp: MultiLangText;

  // Research - TRAVOT
  research_travot_head: MultiLangText;
  research_travot_short: MultiLangText;
  research_travot_exp: MultiLangText;

  // Research - AI
  research_ai_head: MultiLangText;
  research_ai_short: MultiLangText;
  research_ai_exp: MultiLangText;

  // Research - SI
  research_si_head: MultiLangText;
  research_si_short: MultiLangText;
  research_si_exp: MultiLangText;

  // Research - AD
  research_ad_head: MultiLangText;
  research_ad_exp: MultiLangText;

  // Research - IU
  research_iu_head: MultiLangText;
  research_iu_short: MultiLangText;
  research_iu_exp: MultiLangText;

  // Research - UI
  research_ui_head: MultiLangText;
  research_ui_exp: MultiLangText;
  research_ui_exp2: MultiLangText;

  // Research - AG
  research_ag_head: MultiLangText;
  research_ag_exp: MultiLangText;

  // Research Projects
  research_proj_crest: MultiLangText;
  research_proj_crest_desc: MultiLangText;
  research_proj_sip: MultiLangText;
  research_proj_sip_desc: MultiLangText;
  research_proj_agv: MultiLangText;

  // Members
  members_head: MultiLangText;
  members_past_head: MultiLangText;
  members_past_grade_doctor: MultiLangText;
  members_past_grade_master: MultiLangText;
  members_past_grade_bachelor: MultiLangText;

  // Publications
  publication_journal_head: MultiLangText;
  publication_international_head: MultiLangText;
  publication_domestic_head: MultiLangText;

  // Links
  links_head: MultiLangText;

  // Access
  access_location_head: MultiLangText;
  access_location_exp: MultiLangText;
  access_address: MultiLangText;
  access_rooms: MultiLangText;
  access_tel: MultiLangText;
  access_accessmap_head: MultiLangText;
  access_accessmap_link1: MultiLangText;
  access_accessmap_link2: MultiLangText;

  // For Collaborations
  for_collaborations_about: MultiLangText;
  for_collaborations_contact: MultiLangText;
  for_collaborations_access: MultiLangText;
  for_collaborations_email: MultiLangText;
  for_collaborations_example: MultiLangText;
  for_collaborations_example1: MultiLangText;
  for_collaborations_example2: MultiLangText;
  for_collaborations_example3: MultiLangText;
  for_collaborations_example4: MultiLangText;
  for_collaborations_example5: MultiLangText;

  // Activities
  activity_award_head: MultiLangText;
  activity_media_head: MultiLangText;
  activity_talk_head: MultiLangText;

  // Footer
  footer: MultiLangText;
};

// 基本的なテキストデータ
export const texts: Texts = {
  title: { en: "Imai Laboratry", ja: "慶應義塾大学 今井研究室" },

  language: { en: "Language", ja: "言語" },

  menu_home: { en: "Home", ja: "ホーム" },
  menu_research: { en: "Research", ja: "研究" },
  menu_research_theme: { en: "Research Theme", ja: "研究分野" },
  menu_research_proj: { en: "Research Projects", ja: "研究プロジェクト" },
  menu_research_hai: {
    en: "Human-Agent Interaction (HAI)",
    ja: "ヒューマン-エージェント インタラクション (HAI)",
  },
  menu_research_hri: {
    en: "Human-Robot Interaction (HRI)",
    ja: "ヒューマン-ロボット インタラクション (HRI)",
  },
  menu_research_ca: { en: "Cognitive Adaption", ja: "認知適応" },
  menu_research_as: { en: "Augmented Society", ja: "拡張社会" },
  menu_research_cn: {
    en: "Cognitive Neural Network",
    ja: "認知的ニューラルネットワーク",
  },
  menu_member: { en: "Members", ja: "メンバー" },
  menu_publication: { en: "Publications", ja: "論文/業績" },
  menu_publication_journal: { en: "Journal", ja: "ジャーナル" },
  menu_publication_international: {
    en: "International Conference",
    ja: "国際会議",
  },
  menu_publication_domestic: {
    en: "Domestic Conference (Japan)",
    ja: "国内会議 (日本)",
  },
  menu_links: { en: "Link", ja: "外部リンク" },
  menu_for_collaborations: {
    en: "For Collaborations and Companies",
    ja: "共同研究・企業の方へ",
  },
  menu_access: { en: "Access", ja: "アクセス" },
  menu_class: { en: "Class", ja: "授業" },
  menu_b3: { en: "For B3", ja: "B3向け情報" },
  menu_activity: { en: "Activities", ja: "アクティビティ" },
  menu_activity_award: { en: "Awards", ja: "受賞" },
  menu_activity_media: { en: "Media", ja: "メディア" },
  menu_activity_talk: { en: "Talks", ja: "登壇" },

  home_imailab: {
    en: "INTERACTIVE ARTIFICIAL INTELLIGENCE LABORATORY",
    ja: "INTERACTIVE ARTIFICIAL INTELLIGENCE LABORATORY",
  },
  home_message: {
    en: "We are developing interactive AI algorithms and systems that augment the interaction between people and information systems and the communication between people.",
    ja: "人と情報システムのインタラクション・人と人のコミュニケーションを拡張するインタラクティブAIについて研究しています。",
  },
  home_keywords: { en: "Keywords", ja: "キーワード" },

  research_head: {
    en: "Interactive Artificial Intelligence",
    ja: "インタラクティブAI",
  },
  research_layer_cap: {
    en: "Three layer for Interactive AI",
    ja: "Interactive AIを実現する3階層",
  },
  research_exp: {
    en: "Imai Laboratory studies mechanisms for Interactive Artificial Intelligence based on Cognitive Science, Artificial Intelligence, Robotics, Intelligent Sensor Network, and Interaction Design.\n\nWe are especially interested in the particular interaction in a physical world including humans and machines. An intelligent machine has to have a skill of interacting with people by developing a relation, adapting each other, sharing information with them, supporting their activities, and developing a new symbiosis society. A robot, a computer graphic agent, and a sensor network are our key technologies to develop the interactive artificial intelligent system. We develop an interaction model and/or mechanism on the physical agent, and show how the model/mechanism works at a wild situation.\n\nOur design principle for developing the interactive artificial intelligence is a three layered model consisting of the layer of knowledge base interaction/adaptation/learning, the layer of theory of mind, and the layer of generating liveness. We consider that the AI technologies cannot be applied to interaction without the skill of the theory of mind and the liveness. We investigate how the mechanisms of the three layers cooperate to achieve a natural interaction with humans.",
    ja: "今井研究室では、認知科学・人工知能・知能ロボット・知的センサネットワーク・インタラクションデザインを基盤として、インタラクティブな人工知能を実現するメカニズムの研究を行っています。特に、人と機械を含む実世界でのインタラクションを対象にインタラクティブ人工知能システムの研究を行っています。\n\nインタラクティブ人工知能システムでは、人とインタラクションする能力を基に人と関係を築いたり、人と相互に適応したり、人と情報を共有したり、人の生活を支援したりする人と機械の共生環境の実現を目指しています。ロボットやコンピュータグラフィックスエージェント、センサネットワークを利用することで、インタラクションのモデルやメカニズムを明らかにし、実世界で活躍できる知能システムの実現をめざします。\n\n今井研究室では、デザイン原理として三つのインタラクションの層を考えています。一番下は今性の層(Liveness)、その上に心の理論の層(Reading the other's mind)、一番上に知的で適応的なインタラクションの層(Adaptation, Learning)があり、これらが連携して初めて人と機械の間のインタラクションが成立すると考えています。人は、今性のある機械の動きを見て機械に心があることを想定し、結果として、機械と知的な駆け引きをしたり、相互に適応したりします。このデザイン原理の基で知的システムを設計しています。",
  },

  // Research - Interactive SmartClerk
  research_isc_head: {
    en: "A Robot that Recommends Products with Few Samples Interactive-SmartClerk",
    ja: "少ないサンプルで商品を推薦するロボット Interactive-SmartClerk",
  },
  research_isc_short: {
    en: "A Robot that Recommends Products with Few Samples Interactive-SmartClerk",
    ja: "少ないサンプルで商品を推薦するロボット Interactive-SmartClerk",
  },
  research_isc_exp: {
    en: "When building a machine learning model, a large number of samples is typically required. Even when fine-tuning a model to match an individual's preferences, a considerable amount of preference data is necessary. On the other hand, a store clerk can recommend products by simply asking about 2 or 3 preferences. This research utilizes a mathematical model revealed through cognitive science experiments that explain how humans infer others' preferences. By asking about preferences for just four dresses, it can recommend a preferred dress.",
    ja: "機械学習でモデルをつくるときには大量のサンプルが必要です。ある人の好みのモデルをファインチューニングするにしても、それなりの好みのサンプルが必要です。一方で、店の店員は2,3好みを聞くことで商品を推薦できたりします。この研究では、人が相手の好みをどのように推定するのか、認知科学実験をおこない明らかになった数理モデルを利用しています。4着のドレスの好みを聞くだけで、好みのドレスを推薦することができます。",
  },

  // Research - SCAINs
  research_scains_head: {
    en: "Missed Conversation Support System",
    ja: "聞き逃し支援システム",
  },
  research_scains_short: {
    en: "Missed Conversation Support System",
    ja: "聞き逃し支援システム",
  },
  research_scains1_exp: {
    en: "In online meetings such as Zoom, it's easy to miss what others are saying when you're distracted by something else. Many people have experienced the frustration of being asked for their opinion when they weren't paying attention. We developed an algorithm that identifies important missed statements (which we call SCAINs) from the conversation. Additionally, we created the SCAINs Presenter, which presents these important missed statements to help people navigate through situations where they missed parts of the conversation. With the practical application of this research, individuals will be able to participate in multiple meetings or handle multiple tasks more efficiently.",
    ja: "zoomなどのオンライン会議では、他のことをしていてつい他の人の話を聞き逃してしまうことがあります。話を聞いていない時に、意見を求められて困った経験がある人もいると思います。このような聞き逃した発言の中から重要な発言（SCAINsと呼んでいます）を見つけるアルゴリズを作りました。また、聞き逃した人にSCAINsを提示して、聞き逃し場面を乗り切るSCAINs Presenterを作りました。この研究が実用化されることで、一人の人が複数の会議に参加できたり、複数の仕事を効率良くこなすことができるようになります。",
  },
  research_scains2_exp: {
    en: "In the video at left, you and Person A are having a conversation about a picture next to you, while Person B is not paying attention (in this video, Person A and Person B are using GPT-4, and you are providing human input). When important parts of the conversation between you and Person A arise that would cause a loss of meaning if missed, the corresponding sections are highlighted in yellow and red (the colors are used to make the algorithm's judgments easier to understand). In the video, we verify what happens if Person B misses these key sections by directing the conversation to them. You'll notice that Person B, who missed the colored sections, starts saying things that are off-topic.",
    ja: "左のビデオでは、Aさんとあなたが横にある絵について会話をしていて、Bさんが話を聞いていない場面です(このビデオではAさんとBさんは、gpt4を用いています。あなたは、人間の入力です)。Aさんとあなたの会話の中で聞き逃すと意味が発生する会話が生じると、該当箇所が黄色と赤色で表示されます（アルゴリズムの判定をわかりやすくするために色をつけてます）。ビデオの中では、この場面で、該当箇所を聞き逃すとどうなるかを、Bさんに話を振ることで確かめています。色のついた場所を聞き逃しているBさんが検討違いのことを言い出すのがわかると思います。",
  },

  // Research - CLOZER
  research_closer_head: {
    en: "Automatic English Cloze Test Generation System CLOZER",
    ja: "英語穴埋め問題の自動生成システム CLOZER",
  },
  research_closer_short: {
    en: "Automatic English Cloze Test Generation System CLOZER",
    ja: "英語穴埋め問題の自動生成システム CLOZER",
  },
  research_closer_exp: {
    en: 'Q. Fill in the blank with the correct word: "If you want to go to Keio University, you should ____ hard."\nThis type of fill-in-the-blank question is called a cloze test. In this research, we define a good cloze test as one where no other word fits the context besides the correct answer. We developed an algorithm called CLOZER that automatically generates such questions. CLOZER uses BERT, a large-scale natural language model, to simulate human answer tendencies and calculates a Gap Score based on the Gini coefficient to generate questions. This research aims to determine whether machine learning models can simulate human thought processes when solving problems and whether they can create good questions.',
    ja: 'Q. 以下の穴埋め問題に入る単語を答えよ。"If you want to go to Keio University, you should ____ hard." このような自由記述の穴埋め問題をcloze testと言います。この研究では、正解の単語意外文脈的に入らない問題を良いcloze testとして、自動で問題を生成するアルゴリズムCLOZERを開発しました。CLOZERでは、大規模自然言語モデルであるBERTを用いて人間の解答傾向をシュミレートし、ジニ係数に基づいたGapスコアを算出することで問題を生成します。機械学習モデルは問題を解く際の人間の思考をシュミレートすることができるのか、そして機械学習モデルは良い問題を作ることができるのかを明らかにするために、研究を行っています。',
  },

  // Research - RelBot
  research_relbot_head: {
    en: "A Robot That Engages in Conversation While Judging Relationships",
    ja: "仲の良し悪しを判断しながら会話するロボット",
  },
  research_relbot_short: {
    en: "A Robot That Engages in Conversation While Judging Relationships",
    ja: "仲の良し悪しを判断しながら会話するロボット",
  },
  research_relbot_exp: {
    en: "People engage in conversations while considering whether they agree or disagree with others' opinions. Sometimes, this leads to conflicts during discussions. This research utilizes a large-scale language model to infer the relationships between participants and applies Heider's balance theory, which describes the dynamics of likes and dislikes among three people, to simulate conversations where participants either become allies or experience discord. Let's take a look at a conversation between Keio-fan Pepper-kun, Waseda-fan Pepper-chan, and a human.",
    ja: "人は、会話の中で意見が合う合わないを考えながら、会話します。時には話し合いの中で仲間割れが生じます。本研究は、大規模言語モデルで会話参加者の関係を推測させながら、ハイダーのバランス理論と呼ばれる三人の間の好き嫌いの関係の変化規則を利用することで、仲間になったり、仲間割れが発生する会話を実現しています。慶應ファンのペッパーくんと、早稲田ファンのペッパーちゃんと、人間の三人の会話を見てみましょう。",
  },

  // Research - TRAVOT
  research_travot_head: {
    en: "Conversation Robot System for Travel Memoir Generation",
    ja: "対話を通じた旅行体験記生成",
  },
  research_travot_short: {
    en: "Conversation Robot System for Travel Memoir Generation",
    ja: "対話を通じた旅行体験記生成",
  },
  research_travot_exp: {
    en: "We aim to create a system that generates travel diaries through dialogue with a robot. While image captioning technology can now provide descriptive text about photos, it cannot capture the stories or memories behind the moment when the photo was taken or the experiences associated with it. To create a travel diary, it is necessary to gather information directly from the person who experienced the trip. In this research, we developed a robot that engages in conversation about photos taken during a trip. The system then uses the information gathered through this conversation to generate a travel diary filled with personal memories.",
    ja: "ロボットとの対話を通じて旅行体験記を生成するシステムの実現を目指しています。画像キャプショニングが登場し、画像に関する説明文が得られるようになっていますが、その写真をとった時のエピソードや、体験したことなどの思い出は、画像情報から得られません。旅行体験記を作るためには、本人から情報を聞き出す必要があります。本研究では、旅行で撮った写真に対して人と会話するロボットを実現しました。そして、ロボットとの会話を通して得られた情報をもとに、思い出話の詰まった旅行体験記を生成することができます。",
  },

  // Research - AI
  research_ai_head: {
    en: "The research of contextual language understanding",
    ja: "文脈を考慮した言語対話研究",
  },
  research_ai_short: {
    en: "Contextual language understanding",
    ja: "文脈を考慮した言語対話研究",
  },
  research_ai_exp: {
    en: "The meaning of a word depends on the context. The context consists of words that have a fixed meaning. Since the context and the senses depend on each other, a method of the simultaneous estimation is significant to grasp the flow of a dialogue. In the theme, we are developing a language comprehension algorithm that progresses in time to gradually understand what the other person is saying in a conversation while allowing misunderstanding each other.",
    ja: "単語の意味は文脈で決まります。文脈は、意味が決まった単語で構成されます。双方が相手の構成要素となっているので、同時に推定していく手法が必要になります。このテーマでは、お互いが勘違いしながらも、徐々に対話の中で相手の言わんとしていることを理解していく時間進展のある言語理解アルゴリズムを開発しています。",
  },

  // Research - SI
  research_si_head: {
    en: "The research of situated interaction",
    ja: "状況・画像と言語",
  },
  research_si_short: {
    en: "Situated interaction",
    ja: "状況・画像と言語",
  },
  research_si_exp: {
    en: "Situated expressions are related to things and events in the environment around them and exclude obvious information from themselves. People select the relevant environmental stuff along with the progress of the dialogue. In this theme, we are investigating a method for determining important information for a conversation from image information and sensor information.",
    ja: "時に、人の発言は周囲の物や出来事に関連していて、自明な事柄は初略されます。また、周囲にある沢山の物のどれを無視して、どれに注目したらいいのかも、対話の文脈が進む中で決まってきます。このテーマでは、画像情報やセンサ情報の中から対話に重要な情報を決めていく手法の研究も行っています。",
  },

  // Research - AD
  research_ad_head: {
    en: "Augmented Dialogue",
    ja: "オーギュメンテッド対話：人のインタラクションの支援",
  },
  research_ad_exp: {
    en: "The difficulty in human-human communication is related to the uncertainty of whether the other person understands the meaning of what you want to say or is looking at the material you want to show. In this theme, we develop an Augmented Dialogue that supports dialogue between people by guessing the missing information that occurs in the interaction by using an artificial intelligence system.",
    ja: "人と人のコミュニケーションで難しいのは、対話の中で相手が自分が言いたいことの意味を正しく理解しているのか、自分が示したい資料を見ているか本当のところは分からないことです。このテーマでは、対話分析する人工知能でやりとりの中で生じる欠けた情報を推測することで人と人の対話を支援するオーギュメンテッド対話を実現しようとしています。",
  },

  // Research - IU
  research_iu_head: {
    en: "Interactive understanding others with small samples",
    ja: "少数サンプルと他者理解",
  },
  research_iu_short: {
    en: "Interactive understanding others",
    ja: "少数サンプルと他者理解",
  },
  research_iu_exp: {
    en: "Humans are able to acquire the model of the others with small numbers of interactions, while the machine learning algorithm requires a certain amount of data. The theme develops an AI system in the scene of understanding others in interaction by comparing the tendency of human interlocutors with the machine learning algorithm.",
    ja: "機械学習をするためには大量のデータが必要ですが、人は少ないサンプルでも理解できてしまうことが多々あります。本研究では、機械学習の特性と、人との情報集約の特性を比較しながら、人が他人から情報を聞き出す他者理解のインタラクションの場面に適応可能な新しいアルゴリズムの研究をしています。",
  },

  // Research - UI
  research_ui_head: {
    en: "User Interface for Mutual Adaptation",
    ja: "人と相互適応するユーザインタフェース",
  },
  research_ui_exp: {
    en: "There are a lot of autonomous machines that accept humans' control, such as computer applications, computer games, teleoperated robots, and autonomous vehicles. The control interface for the devices provides a pre-designed method, while users have their preferred style of control. The theme investigates a control environment to support mutual adaptation between users and machines by using a technique of machine learning.",
    ja: "モバイルアプリケーション、ゲーム、テレプレゼンスロボット、自律走行車など、自動的に動きつつも人が操作する物が沢山存在します。本当は、人それぞれ別の操作方法が良いのにもかかわらず、事前にデザインされた操作インタフェースが提供されている物がほとんどです。このテーマでは、人が機械に慣れていく過程と、機械が人の特性を学習していく過程を相互適応として捉えて、より使いやすい知的な操作環境を提供することを目指しています。",
  },
  research_ui_exp2: {
    en: "Researching a wearable avatar named TEROOS. TEROOS is mounted on a person's shoulder and enables the wearer and the user controlling it to share vision remotely. Furthermore, this avatar has an anthropomorphic face, allowing the user controlling it to communicate with people co-located with the wearer, thereby enhancing joint activities between humans and robots.",
    ja: "TEROOSという名前のウェアラブルなアバターを研究しています。TEROOSは人の肩に装着され、着用者とそれを制御するユーザーが遠隔で視覚を共有できるようにします。さらに、このアバターには人間らしい顔があり、それを制御するユーザーが着用者と同じ場所にいる人々とコミュニケーションを取ることを可能にし人とロボットの共同活動を強化します。",
  },

  // Research - AG
  research_ag_head: {
    en: "My Great Agent (ITACO System)",
    ja: "マイグレートエージェント (ITACOシステム）",
  },
  research_ag_exp: {
    en: "We study an autonomous agent to support the user's daily life via interaction. The agent is expected to migrate different types of home appliances to help the user, which is difficult for the robot, which has a physical embodiment. We try to propose the agent-based user interface to integrate the services of living environments and home appliances.",
    ja: "人と対話形式で生活支援をするエージェントの研究をしています。ソフトウェアエージェントは、ロボットと異なり、様々な機器に移動しでサービスできるなどより柔軟な支援の提供が期待できます。本研究では、生活環境・家電機器のサービスをエージェントで統一的に扱えるユーザインタフェースの構築を目指し研究しています。",
  },

  // Research Projects
  research_proj_crest: {
    en: "CREST",
    ja: "CREST",
  },
  research_proj_crest_desc: {
    en: "A study on Mutual Understanding Computing based on Simultaneous Contextualization and Interpreting",
    ja: "文脈と解釈の同時推定に基づく相互理解コンピューテーションの実現",
  },
  research_proj_sip: {
    en: "SIP",
    ja: "SIP",
  },
  research_proj_sip_desc: {
    en: "Project",
    ja: "エビデンスに基づくテーラーメイド教育の研究開発",
  },
  research_proj_agv: {
    en: "",
    ja: "農林中央金庫 アグベンチャーラボ",
  },

  // Members
  members_head: { en: "Members", ja: "研究室メンバー" },
  members_past_head: { en: "Past Members", ja: "過去のメンバー" },
  members_past_grade_doctor: { en: "Doctor", ja: "博士" },
  members_past_grade_master: { en: "Master", ja: "修士" },
  members_past_grade_bachelor: { en: "Bachelor", ja: "学士" },

  // Publications
  publication_journal_head: { en: "Journal", ja: "ジャーナル" },
  publication_international_head: {
    en: "International Conference",
    ja: "国際会議",
  },
  publication_domestic_head: {
    en: "Domestic Conference (Japan)",
    ja: "国内会議 (日本)",
  },

  // Links
  links_head: { en: "Links", ja: "外部リンク" },

  // Access
  access_location_head: {
    en: "Location of Imai Laboratory",
    ja: "今井研究室所在地",
  },
  access_location_exp: {
    en: "Imai Laboratory is located in Yagami Campus.",
    ja: "今井研究室は矢上キャンパスにあります。\n見学は26-203へどうぞ。",
  },
  access_address: {
    en: "Imai Laboratory, Dept. of Information & Computer Science,\nFaculty of Science & Technology, Keio University\n3-14-1 Hiyoshi, Kohoku-ku, Yokohama-shi, Kanagawa-ken 223-8522 Japan",
    ja: "〒223-8522\n神奈川県横浜市港北区日吉 3-14-1\n慶應義塾大学理工学部情報工学科 今井研究室",
  },
  access_rooms: {
    en: "Professor Michita Imai's Room: 26-208B\nStudents' Room: 26-203\nExperimental Room: 25-419\n",
    ja: "今井倫太 教授 居室: 26-208B\n学生居室: 26-203\n実験室: 25-419\n",
  },
  access_tel: {
    en: "TEL: +81-45-566-1515 (Professor's Room)\nTEL: +81-45-566-1749 (Students' Room)",
    ja: "TEL: 045-566-1515 (教授居室)\nTEL: 045-566-1749 (学生居室)\n",
  },
  access_accessmap_head: {
    en: "Access Map (external)",
    ja: "アクセスマップ (外部サイト)",
  },
  access_accessmap_link1: {
    en: "Route to Yagami Campus (Japanese)",
    ja: "矢上キャンパスへの行き方",
  },
  access_accessmap_link2: {
    en: "Yagami Campus Map (Japanese)",
    ja: "交通アクセス",
  },

  // For Collaborations
  for_collaborations_about: {
    en: "At the Imai Laboratory of Keio University, we actively engage in academic consulting to support the scholarly activities of companies and collaborate on joint research projects to address the challenges faced by businesses.",
    ja: "慶應義塾大学今井研究室では、企業のみなさまの学術的な活動を支援するための学術コンサルティングや、企業のみなさまが持つ課題を一緒に解決していく共同研究などを積極的に受け入れいています。",
  },
  for_collaborations_contact: {
    en: "Contact Information",
    ja: "問い合わせ先",
  },
  for_collaborations_access: {
    en: "Professor Rinta Imai\nFaculty of Science and Technology, Keio University",
    ja: "慶應義塾大学　理工学部　教授　今井　倫太\n",
  },
  for_collaborations_email: {
    en: "michita@ailab.ics.keio.ac.jp",
    ja: "michita@ailab.ics.keio.ac.jp",
  },
  for_collaborations_example: {
    en: "Examples of Collaborative Research",
    ja: "共同研究の一例\n",
  },
  for_collaborations_example1: {
    en: "Development of service systems using computer systems, CG agents, and robots that can communicate with humans (via conversation).",
    ja: "人とコミュニケーション(会話)するコンピュータシステム、CGエージェント、ロボットを利用したサービスシステムの構築。\n",
  },
  for_collaborations_example2: {
    en: "System design for emotionally expressive CG characters and robots.",
    ja: "感情を持ったCGキャラクタ・ロボットのシステムデザイン\n",
  },
  for_collaborations_example3: {
    en: "Development of value-added services for online meeting systems.",
    ja: "オンライン会議システムの負荷価値サービスの構築\n",
  },
  for_collaborations_example4: {
    en: "System development utilizing large-scale language models.",
    ja: "大規模言語モデルを利用したシステム構築\n",
  },
  for_collaborations_example5: {
    en: "Analysis of communication (conversation) data.",
    ja: "コミュニケーション（会話）データの分析\n",
  },

  // Activities
  activity_award_head: { en: "Awards", ja: "受賞" },
  activity_media_head: { en: "Media", ja: "メディア" },
  activity_talk_head: { en: "Talks", ja: "登壇" },

  // Footer
  footer: { en: "\u00A9Imai Laboratry", ja: "\u00A9今井研究室" },
};
