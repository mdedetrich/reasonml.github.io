webpackJsonp([22],{"./node_modules/json-loader/index.js!./.cache/json/ru-guide-language-pattern-matching.json":function(s,a){s.exports={data:{allFile:{edges:[{node:{relativePath:"ru/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Примеры",order:60}}}},{node:{relativePath:"ru/guide/index.md",childMarkdownRemark:{frontmatter:{title:"Гайд по Reason",order:0}}}},{node:{relativePath:"ru/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"ru/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Что и Зачем",order:0}}}},{node:{relativePath:"ru/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Перенос JS кода",order:5}}}},{node:{relativePath:"ru/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"ru/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Взаимодействие",order:1}}}},{node:{relativePath:"ru/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Библиотеки",order:2}}}},{node:{relativePath:"ru/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Быстрый старт",order:0}}}},{node:{relativePath:"ru/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Плагины редактора",order:20}}}},{node:{relativePath:"ru/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Шпаргалка по синтаксису",order:1}}}},{node:{relativePath:"ru/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Дополнительные бонусы",order:30}}}},{node:{relativePath:"ru/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Глобальная установка",order:10}}}},{node:{relativePath:"ru/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Настройка редактора",order:10}}}},{node:{relativePath:"ru/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Булев",order:30}}}},{node:{relativePath:"ru/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Исключения",order:175}}}},{node:{relativePath:"ru/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"ru/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Деструктурирование",order:130}}}},{node:{relativePath:"ru/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Функция",order:100}}}},{node:{relativePath:"ru/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"ru/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"ru/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Императивные циклы",order:150}}}},{node:{relativePath:"ru/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Основы языка",order:20}}}},{node:{relativePath:"ru/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Числа",order:40}}}},{node:{relativePath:"ru/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"Список и Массив",order:80}}}},{node:{relativePath:"ru/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Модуль",order:180}}}},{node:{relativePath:"ru/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let привязка",order:10}}}},{node:{relativePath:"ru/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"Больше о типах",order:120}}}},{node:{relativePath:"ru/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Мутации",order:140}}}},{node:{relativePath:"ru/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Объект",order:175}}}},{node:{relativePath:"ru/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Паттерн-матчинг",order:135}}}},{node:{relativePath:"ru/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Запись",order:60}}}},{node:{relativePath:"ru/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"Строка и символ",order:20}}}},{node:{relativePath:"ru/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Обзор",order:0}}}},{node:{relativePath:"ru/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Кортеж",order:50}}}},{node:{relativePath:"ru/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Тип!",order:15}}}},{node:{relativePath:"ru/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"ru/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Вариант!",order:70}}}},{node:{relativePath:"ru/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"ru/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"ru/guide/language/pattern-matching.md",childMarkdownRemark:{html:'<p><em>Убедитесь что вы прочитали про <a href="../../guide/language/variant">Вариант</a> сперва</em>.</p>\n<p><strong>Ма наконец добрались</strong>! Паттерн-матчинг — это одна из лучших фич языка. Как\nдеструктурирование, но дает больше помощи от системы типов.</p>\n<h3 id="Использование"><a href="#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Использование</h3>\n<p>Допустим есть вариант:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> payload =\n| <span class="hljs-type">BadResult</span> int\n| <span class="hljs-type">GoodResult</span> string\n| <span class="hljs-type">NoResult</span>;</code></pre>\n      </div>\n<p>Использую <code>switch</code> можно его "деструктурировать":</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> data = <span class="hljs-type">GoodResult</span> <span class="hljs-string">"Product shipped!"</span>;\n\n<span class="hljs-keyword">let</span> message =\n  <span class="hljs-keyword">switch</span> data {\n  | <span class="hljs-type">GoodResult</span> theMessage =&gt; <span class="hljs-string">"Success! "</span> ^ theMessage\n  | <span class="hljs-type">BadResult</span> errorCode =&gt;\n    <span class="hljs-string">"Something\'s wrong. The error code is: "</span> ^ (string_of_int errorCode)\n  };</code></pre>\n      </div>\n<p>Заметьте как мы деструктурировали <code>data</code> обрабатывая каждый случай. Описанный <code>switch</code>\nвызовет предупреждение от компилятора:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code><span class="hljs-type">Warning</span> <span class="hljs-number">8</span>: this pattern-matching <span class="hljs-keyword">is</span> not exhaustive.\n<span class="hljs-type">Here</span> <span class="hljs-keyword">is</span> an example <span class="hljs-keyword">of</span> a value that <span class="hljs-keyword">is</span> not matched:\n<span class="hljs-type">NoResult</span></code></pre>\n      </div>\n<p>Разве не здорово? Система типов предупреждает о пропущенной ветке. Этот <strong>условный</strong> аспект\nделает паттерн-матчинг очень мощной фичей. Большая часть структур данных "если это, то потом\nто" работает так:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">switch</span> myList {\n| [] =&gt; print_endline <span class="hljs-string">"Empty list"</span>\n| [a, ...theRest] =&gt; print_endline (<span class="hljs-string">"list with the head value "</span> ^ a)\n};\n\n<span class="hljs-keyword">switch</span> myArray {\n| [|<span class="hljs-number">1</span>, <span class="hljs-number">2</span>|] =&gt; print_endline <span class="hljs-string">"This is an array with item 1 and 2"</span>\n| [||] =&gt; print_endline <span class="hljs-string">"This array has no element"</span>\n| <span class="hljs-number">_</span> =&gt; print_endline <span class="hljs-string">"This is an array"</span>\n}</code></pre>\n      </div>\n<p>Символ <code>_</code> специальный случай, который срабатывает для всех необработанных веток.</p>\n<p>Вы можете выбирать ветки по строке, числу и другим типам. Вы даже можете иметь несколько\nветок с одним результатом.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> reply =\n  <span class="hljs-keyword">switch</span> message {\n  | <span class="hljs-string">"Reason\'s pretty cool"</span> =&gt; <span class="hljs-string">"Yep"</span>\n  | <span class="hljs-string">"good night"</span> =&gt; <span class="hljs-string">"See ya!"</span>\n  | <span class="hljs-string">"hello"</span> | <span class="hljs-string">"hi"</span> | <span class="hljs-string">"heya"</span> | <span class="hljs-string">"hey"</span> =&gt; <span class="hljs-string">"hello to you too!"</span>\n  | <span class="hljs-number">_</span> =&gt; <span class="hljs-string">"Nice to meet you!"</span>\n  };</code></pre>\n      </div>\n<p>В комбинации с другими структурами данных паттерн-матчинг может создавать очень лаконичный,\nпроверенный и производительный код:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message =\n  <span class="hljs-keyword">switch</span> data {\n  | <span class="hljs-type">GoodResult</span> theMessage =&gt; <span class="hljs-string">"Success! "</span> ^ theMessage\n  | <span class="hljs-type">BadResult</span> (<span class="hljs-number">0</span> | <span class="hljs-number">1</span> | <span class="hljs-number">5</span>) =&gt; <span class="hljs-string">"Something\'s wrong. It\'s a server side problem."</span>\n  | <span class="hljs-type">BadResult</span> errorCode =&gt; <span class="hljs-string">"Unknown error occurred. Code: "</span> ^ string_of_int errorCode\n  | <span class="hljs-type">NoResult</span> =&gt; <span class="hljs-string">"Things look fine"</span>\n  };</code></pre>\n      </div>\n<h4 id="when-проверки"><a href="#when-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>When проверки</h4>\n<p>Когда вам действительно нужно проверить некоторую логику внутри паттерна, вы можете\nиспользовать <code>when</code>, который является синтаксическим сахаром для <code>if</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message =\n  <span class="hljs-keyword">switch</span> data {\n  | <span class="hljs-type">GoodResult</span> theMessage =&gt; ...\n  | <span class="hljs-type">BadResult</span> errorCode when isServerError errorCode =&gt; ...\n  | <span class="hljs-type">BadResult</span> errorCode =&gt; ... <span class="hljs-comment">/* otherwise */</span>\n  | <span class="hljs-type">NoResult</span> =&gt; ...\n  };</code></pre>\n      </div>\n<h3 id="Советы-и-трюки"><a href="#%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%8B-%D0%B8-%D1%82%D1%80%D1%8E%D0%BA%D0%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Советы и трюки</h3>\n<p><strong>Старайтесь по возможности держать список веток плоским</strong>. Пример ниже.</p>\n<p>Не используйте <code>_</code> слишком часто. Этот способ не дает компилятору точно сказать, что\nвы забыли проверить один из случаем. А это особенно ценно во время рефакторинга, когда вы\nдобавляете новый элемент в вариант. Постарайтесь использовать <code>_</code> только для случаев с\nбесконечными вариантами (строки, числа).</p>\n<p>Вот серия примеров от худшего к лучшему:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> optionBoolToJsBoolean opt =&gt;\n  <span class="hljs-keyword">if</span> (opt == <span class="hljs-type">None</span>) {\n    <span class="hljs-type">Js</span>.false_\n  } <span class="hljs-keyword">else</span> {\n    <span class="hljs-keyword">if</span> (opt == <span class="hljs-type">Some</span> <span class="hljs-literal">true</span>) {\n      <span class="hljs-type">Js</span>.true_\n    } <span class="hljs-keyword">else</span> {\n      <span class="hljs-type">Js</span>.false_\n    }\n  };</code></pre>\n      </div>\n<p>Это совсем глупо, лучше использовать паттерн-матчинг:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> optionBoolToJsBoolean opt =&gt; <span class="hljs-keyword">switch</span> opt {\n| <span class="hljs-type">None</span> =&gt; <span class="hljs-type">Js</span>.false_\n| <span class="hljs-type">Some</span> a =&gt; <span class="hljs-keyword">switch</span> a {\n  | <span class="hljs-literal">true</span> =&gt; <span class="hljs-type">Js</span>.true_\n  | <span class="hljs-literal">false</span> =&gt; <span class="hljs-type">Js</span>.false_\n  }\n};</code></pre>\n      </div>\n<p>Лучше, но все еще вложено.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> optionBoolToJsBoolean opt =&gt; <span class="hljs-keyword">switch</span> opt {\n| <span class="hljs-type">None</span> =&gt; <span class="hljs-type">Js</span>.false_\n| <span class="hljs-type">Some</span> <span class="hljs-literal">true</span> =&gt; <span class="hljs-type">Js</span>.true_\n| <span class="hljs-type">Some</span> <span class="hljs-literal">false</span> =&gt; <span class="hljs-type">Js</span>.false_\n};</code></pre>\n      </div>\n<p>Вот теперь отлично!  И вы даже можете сделать так:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> optionBoolToJsBoolean opt =&gt; <span class="hljs-keyword">switch</span> opt {\n| <span class="hljs-type">Some</span> <span class="hljs-literal">true</span> =&gt; <span class="hljs-type">Js</span>.true_\n| <span class="hljs-number">_</span> =&gt; <span class="hljs-type">Js</span>.false_\n};</code></pre>\n      </div>\n<p>Так короче, но убивает проверку, о которой говорилось ранее. Такой вариант лучший:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> optionBoolToJsBoolean opt =&gt; <span class="hljs-keyword">switch</span> opt {\n| <span class="hljs-type">Some</span> <span class="hljs-literal">true</span> =&gt; <span class="hljs-type">Js</span>.true_\n| <span class="hljs-type">Some</span> <span class="hljs-literal">false</span> | <span class="hljs-type">None</span> =&gt; <span class="hljs-type">Js</span>.false_\n};</code></pre>\n      </div>\n<p>В таком коде намного сложнее сделать ошибку! Всегда старайтесь использовать такой подход\nвместо if-else. Это более кратко и <a href="../../guide/language/variant#design-decisions">более производительно</a>.</p>\n<p>Посмотрите другой пример для кортежа <a href="../../guide/language/tuple#tips--tricks">тут</a>.</p>\n<h3 id="Проектные-решения"><a href="#%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Проектные решения</h3>\n<p>The notorious <a href="https://en.wikipedia.org/wiki/Fizz_buzz#Programming_interviews">fizzbuzz problem</a> strangely trips some people up, partially due its nature of paralyzing the programmer who hopes to simplify/unify the few condition branches in search of elegance where there\'s none. While fizzbuzz is slightly too dynamic to be solved in <code>when</code>-less switches, hopefully you can see that usually, pattern-matching\'s visual conciseness allows us to overcome decision paralysis, while keeping all the benefits (and more, as you\'ve seen) of a bunch of brute-forced <code>if-else</code>s. There\'s really nothing wrong with explicitly listing out all the possibilities; Pattern matching corresponds to <strong>case analysis</strong> in math, a valid problem-solving technique that proves to be extremely convenient.</p>\n<p>Using a Reason <code>switch</code> for the first time might make you feel like you\'ve been missing out all these years. Careful, for it might ruin other languages for you =).</p>\n<p>If you\'ve tried to refactor a big, nested if-else logic, you might realize it\'s very hard to get the logic right. On the other hand, pattern matching + tuple conceptually maps to a 2D table, where each cell can be independently filled. This ensures that whenever you need to add a case in the <code>switch</code>, you can target that and only that table cell, without messing other cells up.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> animal = <span class="hljs-type">Dog</span> | <span class="hljs-type">Cat</span> | <span class="hljs-type">Bird</span>;\n<span class="hljs-keyword">let</span> result = <span class="hljs-keyword">switch</span> (isBig, myAnimal) {\n| (<span class="hljs-literal">true</span>, <span class="hljs-type">Dog</span>) =&gt; <span class="hljs-number">1</span>\n| (<span class="hljs-literal">true</span>, <span class="hljs-type">Cat</span>) =&gt; <span class="hljs-number">2</span>\n| (<span class="hljs-literal">true</span>, <span class="hljs-type">Bird</span>) =&gt; <span class="hljs-number">3</span>\n| (<span class="hljs-literal">false</span>, <span class="hljs-type">Dog</span> | <span class="hljs-type">Cat</span>) =&gt; <span class="hljs-number">4</span>\n| (<span class="hljs-literal">false</span>, <span class="hljs-type">Bird</span>) =&gt; <span class="hljs-number">5</span>\n};</code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th>isBig \\ myAnimal</th>\n<th>Dog</th>\n<th>Cat</th>\n<th>Bird</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>true</td>\n<td>1</td>\n<td>2</td>\n<td>3</td>\n</tr>\n<tr>\n<td>false</td>\n<td>4</td>\n<td>4</td>\n<td>5</td>\n</tr>\n</tbody>\n</table>',frontmatter:{title:"Паттерн-матчинг"}}}},pathContext:{section:"ru",relativePath:"ru/guide/language/pattern-matching.md",relatedFiles:"/^ru\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---ru-guide-language-pattern-matching-775e8c0dc84cf08531c8.js.map