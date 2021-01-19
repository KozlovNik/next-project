import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.wrapper}>
      <ReactPaginate
        pageCount={99}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        previousLabel=""
        nextLabel=""
        containerClassName={styles.pagination}
        pageClassName={styles.item}
        activeClassName={styles.activeItem}
        breakClassName={styles.breakItem}
        breakLinkClassName={styles.link}
        pageLinkClassName={styles.link}
      />
      <div className={styles.info}>Показано товаров: 12 из 100</div>
    </div>
  );
};

export default Pagination;
