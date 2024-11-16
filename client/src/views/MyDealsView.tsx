// MyDealsView.tsx
import React from 'react';
import './MyDealsView.css';

type SalesData = {
  month: string;
  amount: number;
};

type Deal = {
  id: number;
  title: string;
  description: string;
  distance: string;
  price: number;
  likes: number;
  image: string;
};

const salesData: SalesData[] = [
  { month: "March", amount: 50 },
  { month: "April", amount: 56 },
  { month: "May", amount: 41 },
  { month: "June", amount: 5 },
  { month: "July", amount: 8 },
  { month: "August", amount: 69 },
  { month: "September", amount: 97 },
  { month: "October", amount: 10 },
  { month: "Current", amount: 32 },
  { month: "December", amount: 0 },
];

const deals: Deal[] = [
  {
    id: 1,
    title: "Nike Airforce 270mm",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem i um dolor sit amet.",
    distance: "3 miles away",
    price: 90,
    likes: 28,
    image: "/api/placeholder/400/400",
  },
  {
    id: 2,
    title: "RTX3080 PC",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem i um dolor sit amet.",
    distance: "12 miles away",
    price: 1800,
    likes: 3,
    image: "/api/placeholder/400/400",
  },
  {
    id: 3,
    title: "Luxury car",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem i um dolor sit amet.",
    distance: "133 miles away",
    price: 19000,
    likes: 128,
    image: "/api/placeholder/400/400",
  },
];

const HeartIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="heart-icon"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const SimpleChart: React.FC<{ data: SalesData[] }> = ({ data }) => {
  const maxAmount = Math.max(...data.map((d) => d.amount));
  const chartHeight = 160;
  const barWidth = 30;

  return (
    <div className="chart-container">
      <div className="chart-content">
        {data.map((item, index) => (
          <div key={index} className="chart-bar-container" style={{ width: barWidth }}>
            <div
              className={`chart-bar ${item.month === "Current" ? "current" : ""}`}
              style={{
                height: `${(item.amount / maxAmount) * chartHeight}px`,
              }}
            />
            <div className="chart-label">
              <span className="month-label">{item.month}</span>
              {item.amount > 0 && (
                <span className="amount-label">${item.amount}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MyDealsView: React.FC = () => {
  return (
    <div className="deals-container">
      <div className="header-section">
        <h1>My Sales</h1>
        <h2>2024 Total Transactions</h2>
        <p className="total-amount">
          ${salesData.reduce((sum, item) => sum + item.amount, 0)}
        </p>
      </div>

      <div className="chart-section">
        <SimpleChart data={salesData} />
      </div>

      <div className="tabs-section">
        <button className="tab-button active">In Sale</button>
        <button className="tab-button">Concluded</button>
        <button className="tab-button">Hidden</button>
      </div>

      <div className="deals-list">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <img
              src={deal.image}
              alt={deal.title}
              className="deal-image"
            />
            <div className="deal-content">
              <h3 className="deal-title">{deal.title}</h3>
              <p className="deal-description">{deal.description}</p>
              <p className="deal-distance">{deal.distance}</p>
              <div className="deal-footer">
                <span className="deal-price">
                  US$ {deal.price.toLocaleString()}
                </span>
                <div className="likes-container">
                  <HeartIcon />
                  <span className="likes-count">{deal.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDealsView;