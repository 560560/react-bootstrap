let initialState = {
    posts: [
        {
            id: 0,
            img: "https://bootstrap.reactlearning.ru/img/javascript.png",
            title: "JavaScript",
            text: "JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities."
        },
    {
            id: 1,
            img: "https://bootstrap.reactlearning.ru/img/c++.jpg",
            title: "C++",
            text: "C++ is an enhanced C language typically used for object oriented programming. It traces its origins back well over thirty years. Although it’s far from the oldest computer language, it’s one of the older ones that is in common usage today – so you might say it gets an A for its ability to adapt to changing technological times."
        },
    {
            id: 2,
            img: "https://bootstrap.reactlearning.ru/img/java.jpg",
            title: "Java",
            text: "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation."
        },
    {
            id: 3,
            img: "https://bootstrap.reactlearning.ru/img/perl.png",
            title: "Perl",
            text: "Perl is a general-purpose programming language originally developed for text manipulation and now used for a wide range of tasks including system administration, web development, network programming, GUI development, and more."
        },
    {
            id: 4,
            img: "https://bootstrap.reactlearning.ru/img/php.png",
            title: "PHP",
            text: "PHP is a programming language that you can use to write Web applications. A Web application can be anything from a simple “contact us” form through to a fully-fledged blogging system, online store, or forum system."
        },
    {
            id: 5,
            img: "https://bootstrap.reactlearning.ru/img/python.png",
            title: "Python",
            text: "In technical terms, Python is an object-oriented, high-level programming language with integrated dynamic semantics primarily for web and app development. It is extremely attractive in the field of Rapid Application Development because it offers dynamic typing and dynamic binding options. "
        },
    {
            id: 6,
            img: "https://bootstrap.reactlearning.ru/img/rubi.png",
            title: "Rubi",
            text: "Ruby is a programming language. It was created 20 years ago by Yukihiro “Matz” Matsumoto. By most measures of programming language popularity, Ruby ranks among the top ten, though usually as tenth (or so) in popularity, and largely due to the popularity of Rails. Like Java or the C language, Ruby is a general-purpose programming language, though it is best known for its use in web programming."
        },

    ]
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state

    }
}


export default blogReducer;