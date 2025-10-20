import { useState, useEffect } from "react";
import axios from "axios";

const useIPData = () => {
  const [data, setData] = useState({
    ip: "Loading...",
    asn: "Loading...",
    org: "Loading...",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const urlSource = "https://ipapi.co/json/";

  const fetchIPData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(urlSource);
      setData({
        ip: res.data.ip,
        asn: res.data.asn,
        org: res.data.org,
      });
      setError(null);
    } catch (err) {
      console.error("Error fetching IP data:", err);
      setData({
        ip: "Unable to fetch IP",
        asn: "Unable to fetch ASN",
        org: "Unable to fetch Organization",
      });
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIPData();
  }, []);

  return { data, error, loading, refetch: fetchIPData };
};

export default useIPData;
