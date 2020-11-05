require('paginationjs');

const pageSize = 12;

// $('#pagination-container').pagination({
//   dataSource: function (done) {
//     var result = [];
//     for (var i = 1; i < 12 * 15; i++) {
//       result.push(i);
//     }
//     done(result);
//   },
//   pageSize: pageSize,
//   pageRange: 1,
//   ulClassName: 'paginationjs-list',
//   activeClassName: 'paginationjs-active',
//   disableClassName: 'paginationjs-disabled',
//   nextText: 'arrow_forward', // Icon name from material icons
//   showPrevious: false,
//   autoHidePrevious: true,
//   autoHideNext: true,
//   footer: function (currentPage, totalPage, totalNumber) {
//     var currentPageMin = pageSize * (currentPage - 1) + 1;
//     var currentPageMax = Math.min(pageSize * currentPage, totalNumber);

//     return (
//       '<span class="paginationjs-footer">' +
//       currentPageMin +
//       ' – ' +
//       currentPageMax +
//       ' из 100+ вариантов аренды</span>'
//     );
//   },
// });
