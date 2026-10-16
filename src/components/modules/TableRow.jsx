import styles from "./TableCoin.module.css";

import ChartUp from "../../assets/chart-up.svg";
import ChartDown from "../../assets/chart-down.svg";

function TableRow({ coin, setChart }) {
  const {
    name,
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
  } = coin;

  const isPositive = price_change_percentage_24h >= 0;

  const showHandler = () => {
    setChart(true);
  };

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={name} width={24} />
          <span>{symbol?.toUpperCase()}</span>
        </div>
      </td>

      <td>{name}</td>

      <td>
        {current_price != null ? `$${current_price.toLocaleString()}` : "—"}
      </td>

      <td className={isPositive ? styles.success : styles.error}>
        {price_change_percentage_24h != null
          ? `${price_change_percentage_24h.toFixed(2)}%`
          : "—"}
      </td>

      <td>{total_volume != null ? total_volume.toLocaleString() : "—"}</td>

      <td>
        <img
          src={isPositive ? ChartUp : ChartDown}
          alt={isPositive ? "up" : "down"}
        />
      </td>
    </tr>
  );
}

export default TableRow;
